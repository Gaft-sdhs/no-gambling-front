import { useState, useEffect } from 'react';
import BetModal from './components/BetModal';
import TutorialModal from './components/TutorialModal';
import GamblingArea from './components/GamblingArea';
import Timer from './components/Timer';
import BettingArea from './components/BettingArea';
import Bars from './components/Bars';
import './App.css';

function App() {
  const [user, setUser] = useState({ name: 'user', assets: 1000000 });
  const [currentBet, setCurrentBet] = useState(null);
  const [betAmount, setBetAmount] = useState(0);
  const [hasBet, setHasBet] = useState(false);
  const [gameTimer, setGameTimer] = useState(300);
  const [resultTimer, setResultTimer] = useState(120);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showBetModal, setShowBetModal] = useState(false);
  const [showTutorialModal, setShowTutorialModal] = useState(true);
  const [targetValue, setTargetValue] = useState(Math.floor(Math.random() * 30) + 1);
  const [values, setValues] = useState([0, 1, 2, 3]);
  const [bars, setBars] = useState([33, 33, 34]);

  useEffect(() => {
    const savedName = localStorage.getItem('userName');
    const savedAssets = localStorage.getItem('userAssets');
    if (savedName && savedAssets) {
      setUser({ name: savedName, assets: parseInt(savedAssets) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('userName', user.name);
    localStorage.setItem('userAssets', user.assets);
  }, [user]);

  useEffect(() => {
    const interval = setInterval(() => {
      setGameTimer(prev => {
        if (prev > 0) return prev - 1;
        clearInterval(interval);
        endGame();
        return 0;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const value1 = Math.random() * 50;
      const value2 = Math.random() * (50 - value1);
      const value3 = 100 - value1 - value2;
      setBars([value1, value2, value3]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const endGame = () => {
    const value1 = Math.floor(Math.random() * 9) + 1;
    const value2 = Math.floor(Math.random() * 9) + 1;
    const value3 = Math.floor(Math.random() * 9) + 1;
    const result = value1 + value2 + value3;

    setValues([targetValue, value1, value2, value3]);

    if (currentBet) {
      let winAmount = 0;
      if (currentBet === '+' && result > targetValue) {
        winAmount = Math.random() * (2 - 1) + 1 * betAmount;
      } else if (currentBet === '-' && result < targetValue) {
        winAmount = Math.random() * (2 - 1) + 1 * betAmount;
      } else if (currentBet === '=' && result === targetValue) {
        winAmount = betAmount * 3;
      }

      if (winAmount > 0) {
        setUser(prev => ({ ...prev, assets: prev.assets + winAmount }));
      } else {
        setUser(prev => ({ ...prev, assets: prev.assets - betAmount }));
      }
    }

    setTimeout(startResultTimer, 1000);
  };

  const startResultTimer = () => {
    setResultTimer(120);
    const interval = setInterval(() => {
      setResultTimer(prev => {
        if (prev > 0) return prev - 1;
        clearInterval(interval);
        startGame();
        return 0;
      });
    }, 1000);
  };

  const startGame = () => {
    setGameTimer(300);
    setHasBet(false);
    setTargetValue(Math.floor(Math.random() * 30) + 1);
  };

  const placeBet = (amount) => {
    if (amount && amount <= user.assets) {
      setHasBet(true);
      setBetAmount(amount);
      setShowBetModal(false);
    } else {
      alert('유효한 배팅 금액을 입력해주세요.');
    }
  };

  return (
    <div className="container">
      <Timer time={gameTimer} />
      <GamblingArea target={values[0]} values={values.slice(1)} />
      <Bars bars={bars} />
      <BettingArea 
        hasBet={hasBet}
        setCurrentBet={setCurrentBet}
        setShowBetModal={setShowBetModal}
      />
      {showBetModal && (
        <BetModal 
          user={user}
          currentBet={currentBet}
          placeBet={placeBet}
          setCurrentBet={setCurrentBet}
          setShowBetModal={setShowBetModal}
        />
      )}
      {showTutorialModal && (
        <TutorialModal
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          setShowTutorialModal={setShowTutorialModal}
        />
      )}
    </div>
  );
}

export default App;

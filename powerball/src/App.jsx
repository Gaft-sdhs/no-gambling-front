import React, { useState } from 'react';
import useGameState from './hooks/useGameState';
import BetModal from './components/BetModal';
import TutorialModal from './components/TutorialModal';
import GamblingArea from './components/GamblingArea';
import Timer from './components/Timer';
import BettingArea from './components/BettingArea';
import Bars from './components/Bars';
import './App.css';

function App() {
  const {
    user,
    currentBet,
    setCurrentBet,
    betAmount,
    hasBet,
    gameTimer,
    resultTimer,
    targetValue,
    values,
    bars,
    showBetModal,
    setShowBetModal,
    showTutorialModal,
    setShowTutorialModal,
    startGame,
    placeBet,
    completeTutorial,
  } = useGameState();

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="container">
      <Timer time={gameTimer} />
      <GamblingArea target={targetValue} values={values.slice(1)} />
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
          completeTutorial={completeTutorial}
        />
      )}
    </div>
  );
}

export default App;

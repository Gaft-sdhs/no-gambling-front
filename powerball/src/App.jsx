import React, { useState } from 'react';
import useGameState from './hooks/useGameState';
import BetModal from './components/BetModal';
import TutorialModal from './components/TutorialModal';
import GamblingArea from './components/GamblingArea';
import Timer from './components/Timer';
import BettingArea from './components/BettingArea';
import Bars from './components/Bars';
import './App.css';
import imageSrc from './img/뽑기.png';

function App() {
  const {
    user,
    currentBet,
    setCurrentBet,
    betAmount,
    hasBet,
    time,
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
    showResults,
    isGameRunning,
    getBetExplanation,
  } = useGameState();

  const [currentSlide, setCurrentSlide] = useState(0);

  const res = values.slice(1).reduce((acc, val) => acc + val, 0);

  return (
    <div className="container">
      <Timer time={time} />
      <GamblingArea target={targetValue} values={values} showResults={showResults} imageSrc={imageSrc} />
      <Bars bars={bars} />
      <BettingArea 
        hasBet={hasBet}
        setCurrentBet={setCurrentBet}
        setShowBetModal={setShowBetModal}
        showResults={showResults}
        res={res}
        placeBet={placeBet}
        currentBet={currentBet}
        targetValue={targetValue}
        getBetExplanation={getBetExplanation}
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

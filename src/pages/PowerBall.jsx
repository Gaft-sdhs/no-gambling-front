import React, { useState } from "react";
import Bars from "../components/powerball/Bars";
import BetModal from "../components/powerball/BetModal";
import BettingArea from "../components/powerball/BettingArea";
import Timer from "../components/powerball/Timer";
import GamblingArea from "../components/powerball/GamblingArea";
import TutorialModal from "../components/powerball/TutorialModal";
import Ranking from "../components/ranking/Ranking";
import useGameState from "../hooks/useGameState";
import "./css/powerball.css";
import imageSrc from "../assets/random.png";

const PowerBall = () => {
  const {
    user,
    currentBet,
    updateCurrentBet, // updateCurrentBet 사용
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
  } = useGameState();

  const [currentSlide, setCurrentSlide] = useState(0);

  const res = values.slice(1).reduce((acc, val) => acc + val, 0);

  return (
    <main className="powerball">
      <section className="container">
        <Timer time={time} />
        <GamblingArea
          target={targetValue}
          values={values}
          showResults={showResults}
          imageSrc={imageSrc}
        />
        <Bars bars={bars} />
        <BettingArea
          hasBet={hasBet}
          updateCurrentBet={updateCurrentBet} // 수정된 함수 전달
          setShowBetModal={setShowBetModal}
          showResults={showResults}
          res={res}
        />
        {showBetModal && (
          <BetModal
            user={user}
            currentBet={currentBet}
            placeBet={placeBet}
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
      </section>
      <Ranking />
    </main>
  );
};

export default PowerBall;

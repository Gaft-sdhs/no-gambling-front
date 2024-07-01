import React, { useState, useEffect } from "react";
import SnailRace from "../components/snail/SnailRace";
import Ranking from "../components/ranking/Ranking";
import TutorialModal from "../components/snail/TutorialModal";

import snailImage1 from "../assets/1snail.png";
import snailImage2 from "../assets/2snail.png";
import snailImage3 from "../assets/3snail.png";
import snailBg from "../assets/snail_bg.png";

import "./css/snail.css";

const snailImages = [snailImage1, snailImage2, snailImage3];

const Snail = () => {
  const [snails] = useState(['1', '2', '3']);
  const [positions, setPositions] = useState([16, 16, 16]);
  const [isRacing, setIsRacing] = useState(false);
  const [speeds, setSpeeds] = useState([0, 0, 0]);
  const [intervalId, setIntervalId] = useState(null);
  const [voteCounts, setVoteCounts] = useState([0, 0, 0]);
  const [selectedVote, setSelectedVote] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showTutorialModal, setShowTutorialModal] = useState(!localStorage.getItem('tutorialCompleted'));

  const getRandomSpeed = () => Math.random() * 4 + 4;

  const startRace = () => {
    const newSpeeds = snails.map(() => getRandomSpeed());
    setSpeeds(newSpeeds);
    setIsRacing(true);
    setPositions([16, 16, 16]);

    const id = setInterval(() => {
      const updatedSpeeds = snails.map(() => getRandomSpeed());
      setSpeeds(updatedSpeeds);
    }, 1000);
    setIntervalId(id);

    setTimeout(() => {
      setPositions([80, 80, 80]);
    }, 100);
  };

  const handleVote = (index) => {
    if (!isRacing) {
      setSelectedVote(index);
      const newVoteCounts = [...voteCounts];
      newVoteCounts[index] += 1;
      setVoteCounts(newVoteCounts);
    }
  };

  useEffect(() => {
    if (positions.every((position) => position === 80)) {
      clearInterval(intervalId);
      const winner = snails[speeds.indexOf(Math.min(...speeds))];
      setTimeout(() => {
        alert(`${winner} 달팽이가 이겼습니다!`);
        resetRace();
      }, 8000);
    }
  }, [intervalId, positions, snails, speeds]);

  const resetRace = () => {
    setPositions([16, 16, 16]);
    setSpeeds([0, 0, 0]);
    setIsRacing(false);
  };

  const completeTutorial = () => {
    localStorage.setItem('tutorialCompleted', 'true');
    setShowTutorialModal(false);
  };

  return (
    <main className="Snail">
      {showTutorialModal && (
        <TutorialModal
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          setShowTutorialModal={setShowTutorialModal}
          completeTutorial={completeTutorial}
        />
      )}
      <section className="container">
        <div className="race-track" style={{ backgroundImage: `url("${snailBg}")` }}>
          {snails.map((snail, index) => (
            <SnailRace
              key={snail}
              index={index}
              snailPng={snailImages[index]}
              position={positions[index]}
              speed={speeds[index]}
              top={index * 20 + 45}
            />
          ))}
          <div className="button-container">
            <button className={selectedVote === 0 ? "vote-button selected-red" : "vote-button"} onClick={() => handleVote(0)}>1번 달팽이</button>
            <button className={selectedVote === 1 ? "vote-button selected-green" : "vote-button"} onClick={() => handleVote(1)}>2번 달팽이</button>
            <button className={selectedVote === 2 ? "vote-button selected-blue" : "vote-button"} onClick={() => handleVote(2)}>3번 달팽이</button>
            <button className="start-button" onClick={startRace} disabled={isRacing}>Start Race</button>
          </div>
        </div>
        <Ranking />
      </section>
    </main>
  );
};

export default Snail;

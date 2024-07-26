import React, { useState, useEffect } from "react";
import SnailRace from "../components/snail/SnailRace";
import Ranking from "../components/ranking/Ranking";
import TutorialModal from "../components/snail/TutorialModal";
import SnailBetModal from "../components/snail/SnailBetModal.jsx";
import Header from "../components/header/Header";
import snailImage1 from "../assets/1snail.png";
import snailImage2 from "../assets/2snail.png";
import snailImage3 from "../assets/3snail.png";
import snailBg from "../assets/snail_bg.png";

import "./css/snail.css";

const snailImages = [snailImage1, snailImage2, snailImage3];

const Snail = () => {
  const [showBetModal, setShowBetModal] = useState(false);
  const [selectedSnail, setSelectedSnail] = useState(null);
  const [snails] = useState(["1", "2", "3"]);
  const [positions, setPositions] = useState([14, 14, 14]);
  const [isRacing, setIsRacing] = useState(false);
  const [speeds, setSpeeds] = useState([0, 0, 0]);
  const [intervalId, setIntervalId] = useState(null);
  const [selectedVote, setSelectedVote] = useState(null);
  const [raceCount, setRaceCount] = useState(0); // 추가된 상태
  const [user, setUser] = useState({
    name: "사용자 이름",
    money: parseInt(localStorage.getItem("userAssets")) || 100,
  });
  const [currentBet, setCurrentBet] = useState("+");
  const [betData, setBetData] = useState(null);
  const [hasBet, setHasBet] = useState(false); // 추가된 상태

  useEffect(() => {
    const storedMoney = parseInt(localStorage.getItem("userAssets"));
    if (storedMoney) {
      setUser((prevUser) => ({ ...prevUser, money: storedMoney }));
    }
  }, []);

  const getRandomSpeed = () => Math.random() * 4 + 4;

  const startRace = () => {
    setRaceCount((prevCount) => prevCount + 1); // 레이스 카운트 증가
    let newSpeeds;
    if (raceCount >= 2 && selectedSnail !== null) {
      // 세 번째 레이스부터는 사용자가 선택한 달팽이의 속도를 1로 설정
      newSpeeds = snails.map((_, index) =>
        index === selectedSnail ? 10 : getRandomSpeed()
      );
    } else {
      newSpeeds = snails.map(() => getRandomSpeed());
    }
    setSpeeds(newSpeeds);
    setIsRacing(true);
    setPositions([14, 14, 14]);
    setHasBet(false); // 레이스 시작 시 배팅 상태 초기화

    const id = setInterval(() => {
      let updatedSpeeds;
      if (raceCount >= 2 && selectedSnail !== null) {
        updatedSpeeds = snails.map((_, index) =>
          index === selectedSnail ? 1 : getRandomSpeed()
        );
      } else {
        updatedSpeeds = snails.map(() => getRandomSpeed());
      }
      setSpeeds(updatedSpeeds);
    }, 1000);
    setIntervalId(id);

    setTimeout(() => {
      setPositions([80, 80, 80]);
    }, 100);
  };

  useEffect(() => {
    if (positions.every((position) => position === 80)) {
      clearInterval(intervalId);
      const winner = snails[speeds.indexOf(Math.min(...speeds))];
      setTimeout(() => {
        alert(`${winner} 달팽이가 이겼습니다!`);
        handleBetResult(winner);
        resetRace();
      }, 8000);
    }
  }, [positions]);

  const resetRace = () => {
    setPositions([14, 14, 14]);
    setSpeeds([0, 0, 0]);
    setIsRacing(false);
  };

  const handleVote = (index) => {
    if (!isRacing && !hasBet) {
      // 이미 배팅한 경우 배팅 불가
      setSelectedVote(index);
      setSelectedSnail(index);
      setShowBetModal(true);
    }
  };

  const placeBet = (amount) => {
    setBetData({ snailIndex: selectedSnail, amount });
    const newMoney = user.money - amount;
    setUser((prevUser) => ({ ...prevUser, money: newMoney }));
    localStorage.setItem("userAssets", newMoney);
    setShowBetModal(false);
    setHasBet(true); // 배팅 완료 후 상태 업데이트
  };

  const handleBetResult = (winner) => {
    if (betData) {
      if (betData.snailIndex === parseInt(winner) - 1) {
        const newMoney = user.money + betData.amount * 2;
        setUser((prevUser) => ({ ...prevUser, money: newMoney }));
        localStorage.setItem("userAssets", newMoney);
      }
      setBetData(null);
    }
  };

  return (
    <>
      <Header />
      <main className="Snail">
        <TutorialModal />
        <section className="container">
          <div
            className="race-track"
            style={{ backgroundImage: `url("${snailBg}")` }}
          >
            {snails.map((snail, index) => (
              <SnailRace
                key={snail}
                className={`s${index + 1}`}
                snailIndex={index}
                snailPng={snailImages[index]}
                position={positions[index]}
                speed={speeds[index]}
                top={index * 15 + 45}
              />
            ))}
            <div className="button-container">
              <button
                className={
                  selectedVote === 0
                    ? "vote-button selected-red"
                    : "vote-button"
                }
                onClick={() => handleVote(0)}
              >
                1번 달팽이
              </button>
              <button
                className={
                  selectedVote === 1
                    ? "vote-button selected-green"
                    : "vote-button"
                }
                onClick={() => handleVote(1)}
              >
                2번 달팽이
              </button>
              <button
                className={
                  selectedVote === 2
                    ? "vote-button selected-blue"
                    : "vote-button"
                }
                onClick={() => handleVote(2)}
              >
                3번 달팽이
              </button>
              <button
                className="start-button"
                onClick={startRace}
                disabled={isRacing}
              >
                Start Race
              </button>
            </div>
          </div>
          <Ranking />
        </section>
        {showBetModal && (
          <SnailBetModal
            user={user}
            currentBet={currentBet}
            placeBet={placeBet}
            setShowBetModal={setShowBetModal}
            snailIndex={selectedSnail}
          />
        )}
      </main>
    </>
  );
};

export default Snail;

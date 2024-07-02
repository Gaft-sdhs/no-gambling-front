import React, { useState, useEffect } from "react";
import SnailRace from "../components/snail/SnailRace";
import Ranking from "../components/ranking/Ranking";
import TutorialModal from "../components/snail/TutorialModal";
import BetModal from '../components/snail/BetModal';
import snailImage1 from "../assets/1snail.png";
import snailImage2 from "../assets/2snail.png";
import snailImage3 from "../assets/3snail.png";
import snailBg from "../assets/snail_bg.png";

import "./css/snail.css";

const snailImages = [snailImage1, snailImage2, snailImage3];

const Snail = () => {
  const [showBetModal, setShowBetModal] = useState(false);
  const [selectedSnail, setSelectedSnail] = useState(null); // 선택된 달팽이 번호 저장 상태
  const [snails] = useState(["1", "2", "3"]);
  const [positions, setPositions] = useState([14, 14, 14]); // 시작 위치 조정
  const [isRacing, setIsRacing] = useState(false);
  const [speeds, setSpeeds] = useState([0, 0, 0]);
  const [intervalId, setIntervalId] = useState(null);
  const [voteCounts, setVoteCounts] = useState([0, 0, 0]); // 투표 수 저장 배열
  const [selectedVote, setSelectedVote] = useState(null); // 선택된 투표 저장 상태
  const [user, setUser] = useState({ name: '사용자 이름', assets: 100 }); // 사용자 정보 상태
  const [currentBet, setCurrentBet] = useState('+'); // 현재 선택된 배팅 설명 상태

  const getRandomSpeed = () => Math.random() * 4 + 4; // 2초에서 7초 사이의 랜덤 속도

  const startRace = () => {
    const newSpeeds = snails.map(() => getRandomSpeed());
    setSpeeds(newSpeeds);
    setIsRacing(true);
    setPositions([14, 14, 14]); // 시작 위치 조정

    const id = setInterval(() => {
      const updatedSpeeds = snails.map(() => getRandomSpeed());
      setSpeeds(updatedSpeeds);
    }, 1000); // 1초마다 속도를 랜덤하게 변경
    setIntervalId(id);

    setTimeout(() => {
      setPositions([80, 80, 80]); // 끝나는 위치 조정
    }, 100);
  };

  useEffect(() => {
    if (positions.every((position) => position === 80)) {
      clearInterval(intervalId);
      const winner = snails[speeds.indexOf(Math.min(...speeds))];
      setTimeout(() => {
        alert(`${winner} 달팽이가 이겼습니다!`);
        resetRace();
      }, 8000); // 7초 뒤에 alert 창 띄우기
    }
  }, [intervalId, positions, snails, speeds]);

  const resetRace = () => {
    setPositions([14, 14, 14]); // 시작 위치 리셋
    setSpeeds([0, 0, 0]);
    setIsRacing(false);
  };

  const handleVote = (index) => {
    if (!isRacing) {
      setSelectedVote(index);
      const newVoteCounts = [...voteCounts];
      newVoteCounts[index] += 1;
      setVoteCounts(newVoteCounts);
    }
  };

  const placeBet = (amount) => {
    // 여기서 베팅 처리 로직 구현
    console.log(`베팅 금액: ${amount}`);
    // 베팅 처리 로직을 작성하고 필요한 상태 업데이트를 수행하세요.
  };

  return (
    <main className="Snail">
      <TutorialModal />
      <section className="container">
        <div className="race-track" style={{ backgroundImage: `url("${snailBg}")` }}>
          {snails.map((snail, index) => (
            <SnailRace
              key={snail}
              Index={index}
              snailPng={snailImages[index]}
              position={positions[index]}
              speed={speeds[index]}
              top={index * 15 + 45} // 간격 조정 및 위치 내리기
            />
          ))}
          <div className="button-container">
            <button className={selectedVote === 0 ? "vote-button selected-red" : "vote-button"} onClick={() => handleVote(0)}>1번 달팽이</button>
            <button className={selectedVote === 1 ? "vote-button selected-green" : "vote-button"} onClick={() => handleVote(1)}>2번 달팽이</button>
            <button className={selectedVote === 2 ? "vote-button selected-blue" : "vote-button"} onClick={() => handleVote(2)}>3번 달팽이</button>
            <button className="start-button" onClick={startRace} disabled={isRacing}>Start Race</button>
          </div>
        </div>
        <Ranking/>
      </section>
      {showBetModal && (
        <BetModal
          user={user} // 사용자 정보 전달
          currentBet={currentBet} // 현재 선택된 배팅 설명 전달
          placeBet={placeBet} // 베팅 처리 함수 전달
          setShowBetModal={setShowBetModal} // 모달 상태 변경 함수 전달
          snailIndex={selectedSnail} // 선택된 달팽이 번호 전달
        />
      )}
    </main>
  );
};

export default Snail;

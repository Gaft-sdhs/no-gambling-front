import { useState, useEffect } from "react";
import SnailRace from "../components/snail/SnailRace";
import Ranking from "../components/ranking/Ranking";

import snailImage1 from "../assets/1snail.png";
import snailImage2 from "../assets/2snail.png";
import snailImage3 from "../assets/3snail.png";
import snailBg from "../assets/snail_bg.png";

import "./css/snail.css";

const snailImages = [snailImage1, snailImage2, snailImage3];

const Snail = () => {
  const [snails] = useState(["1", "2", "3"]);
  const [positions, setPositions] = useState([14, 14, 14]); // 시작 위치 조정
  const [isRacing, setIsRacing] = useState(false);
  const [speeds, setSpeeds] = useState([0, 0, 0]);
  const [intervalId, setIntervalId] = useState(null);

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

  return (
    <main className="Snail">
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
          <button onClick={startRace} disabled={isRacing}>
            Start Race
          </button>
        </div>
        <Ranking/>
      </section>
    </main>
  );
};

export default Snail;

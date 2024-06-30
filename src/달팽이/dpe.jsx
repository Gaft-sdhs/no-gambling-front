import React, { useState, useEffect } from 'react';
import './css/dpe.css';
import snailImage1 from './dpe_img/1snail.png'; // 첫 번째 달팽이 이미지
import snailImage2 from './dpe_img/2snail.png'; // 두 번째 달팽이 이미지
import snailImage3 from './dpe_img/3snail.png'; // 세 번째 달팽이 이미지

const snailImages = [snailImage1, snailImage2, snailImage3]; // 달팽이 이미지 배열

const SnailRace = ({ snailIndex, position, speed, top }) => {
  return (
    <div className="snail" style={{ left: `${position}%`, transition: `left ${speed}s linear`, top: `${top}%` }}>
      <img src={snailImages[snailIndex]} alt={`snail-${snailIndex}`} />
    </div>
  );
};

const Snail = () => {
  const [snails] = useState(['1', '2', '3']);
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
    if (positions.every(position => position === 80)) {
      clearInterval(intervalId);
      const winner = snails[speeds.indexOf(Math.min(...speeds))];
      setTimeout(() => {
        alert(`${winner} 달팽이가 이겼습니다!`);
        resetRace();
      }, 8000); // 7초 뒤에 alert 창 띄우기
    }
  }, [positions]);

  const resetRace = () => {
    setPositions([14, 14, 14]); // 시작 위치 리셋
    setSpeeds([0, 0, 0]);
    setIsRacing(false);
  };

  return (
    <div style={{ color: "white" }}>
      <div className="race-track">
        {snails.map((snail, index) => (
          <SnailRace 
            key={snail} 
            snailIndex={index} 
            position={positions[index]} 
            speed={speeds[index]} 
            top={index * 15 + 45} // 간격 조정 및 위치 내리기
          />
        ))}
        <button onClick={startRace} disabled={isRacing}>Start Race</button>
      </div>
    </div>
  );
};

export default Snail;

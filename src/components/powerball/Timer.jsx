// 시간을 형식화하고 남은 시간을 표시하는 타이머 컴포넌트

import React from 'react';

// formatTime 함수: 시간을 분:초 형식으로 변환
const formatTime = (time) => {
  const minutes = String(Math.floor(time / 60)).padStart(2, '0');
  const seconds = String(time % 60).padStart(2, '0');
  return `${minutes}:${seconds}`;
};

// Timer 컴포넌트: 남은 시간을 시각적으로 표시
const Timer = ({ time }) => {
  return (
      <div className="timer">
        타이머: <span style={{ color: time <= 10 ? '#FF4136' : 'white', animation: time <= 60 ? 'blink 1s step-start infinite' : 'none' }}>{formatTime(time)}</span>
      </div>
  );
};

export default Timer;
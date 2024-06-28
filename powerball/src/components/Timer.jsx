import React from 'react';

const formatTime = (time) => {
  const minutes = String(Math.floor(time / 60)).padStart(2, '0');
  const seconds = String(time % 60).padStart(2, '0');
  return `${minutes}:${seconds}`;
};

const Timer = ({ time }) => {
  return (
    <div className="timer">
      타이머: <span style={{ color: time <= 10 ? '#FF4136' : 'white', animation: time <= 60 ? 'blink 1s step-start infinite' : 'none' }}>{formatTime(time)}</span>
    </div>
  );
};

export default Timer;

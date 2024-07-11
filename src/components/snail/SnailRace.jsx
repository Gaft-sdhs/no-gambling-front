import React from 'react';

const SnailRace = ({ snailIndex, position, speed, top, snailPng }) => {
  return (
    <div className="snail" style={{ left: `${position}%`, transition: `left ${speed}s linear`, top: `${top}%` }}>
      <img src={snailPng} alt={`snail-${snailIndex}`} />
    </div>
  );
};

export default SnailRace;

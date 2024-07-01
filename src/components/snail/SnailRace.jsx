import React from 'react';
import PropTypes from 'prop-types';

const SnailRace = ({ snailPng, index, position, speed, top }) => {
  return (
    <div
      className="snail"
      style={{
        left: `${position}%`,
        transition: `left ${speed}s linear`,
        top: `${top}%`,
      }}
    >
      <img src={snailPng} alt={`snail-${index}`} />
    </div>
  );
};

SnailRace.propTypes = {
  snailPng: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  position: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
};

export default SnailRace;

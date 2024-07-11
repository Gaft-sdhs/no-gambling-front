// 달팽이 경주를 렌더링하는 컴포넌트

import React from 'react';

// SnailRace 컴포넌트: 개별 달팽이의 위치와 애니메이션을 설정
const SnailRace = ({ snailIndex, position, speed, top, snailPng }) => {
    return (
        <div className="snail" style={{ left: `${position}%`, transition: `left ${speed}s linear`, top: `${top}%` }}>
            <img src={snailPng} alt={`snail-${snailIndex}`} />
        </div>
    );
};

export default SnailRace;
// 도박 영역을 렌더링하는 컴포넌트

import React from 'react';
import './GamblingArea.css';

// GamblingArea 컴포넌트: 이미지를 표시하고 목표 및 값 목록을 렌더링
const GamblingArea = ({ target, values, showResults, imageSrc }) => {
    return (
        <div className="main-content">
            <div className="gambling-area">
                <div className="image-container">
                    <img src={imageSrc} alt="Gambling" className="centered-image" />
                </div>
            </div>
            <div className="gambling-list">
                <div className="circle" id="target">{target}</div>
                {values.slice(1).map((value, index) => (
                    <div className="circle" key={index} id={`value${index + 1}`}>{showResults ? value : ''}</div>
                ))}
            </div>
        </div>
    );
};

export default GamblingArea;
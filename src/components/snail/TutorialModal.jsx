import React, { useState, useEffect } from 'react';
import './css/modal.css'; // 경로 확인

const TutorialModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenTutorial = localStorage.getItem('sailTutor');
    if (!hasSeenTutorial) {
      setIsVisible(true);
    }
  }, []);

  const closeModal = () => {
    localStorage.setItem('sailTutor', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="modal" style={{ display: isVisible ? 'flex' : 'none' }}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>게임 튜토리얼</h2>
        <p>달팽이 레이싱 게임에 오신것을 환영합니다.
            1,2,3마음에 드시는 달팽이에 베팅을 하시고
            베팅한 달팽이가 이기면 건돈의 2배의 돈을
            돌려주는 방식입니다.
        </p>
        <button className="bet-button" onClick={closeModal}>시작하기</button>
      </div>
    </div>
  );
};

export default TutorialModal;

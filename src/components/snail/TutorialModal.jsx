import React from 'react';
import PropTypes from 'prop-types';

const TutorialModal = ({ currentSlide, setCurrentSlide, setShowTutorialModal, completeTutorial }) => {
  const slides = [
    {
      title: '게임에 오신 것을 환영합니다',
      content: '이 게임은 간단한 배팅 게임입니다.3마리의 달팽이에게 배팅을 할 수 있습니다.',
    },
    {
      title: '게임 방법',
      content: '1번 달팽이 부터 3번 달팽이 까지 있습니다. 이길 것 같은 달팽이를 예측해서 돈을 걸고 게임 시작 버튼을 누느면 게임이 시작됩니다.',
    },
  ];

  const snailTutorial = () => {
    completeTutorial();
    setShowTutorialModal(false);
    localStorage.setItem('snailTutorialCompleted', 'true');
  };

  return (
    <div className="modal" style={{ display: 'flex' }}>
      <div className="modal-content">
        <span className="close" onClick={snailTutorial}>&times;</span>
        <div className="tutorial-slide active">
          <h2>{slides[currentSlide].title}</h2>
          <p>{slides[currentSlide].content}</p>
          {currentSlide < slides.length - 1 ? (
            <button className="bet-button" onClick={() => setCurrentSlide(currentSlide + 1)}>다음</button>
          ) : (
            <button className="bet-button" onClick={snailTutorial}>완료</button>
          )}
        </div>
      </div>
    </div>
  );
};

TutorialModal.propTypes = {
  currentSlide: PropTypes.number.isRequired,
  setCurrentSlide: PropTypes.func.isRequired,
  setShowTutorialModal: PropTypes.func.isRequired,
  completeTutorial: PropTypes.func.isRequired,
};

export default TutorialModal;

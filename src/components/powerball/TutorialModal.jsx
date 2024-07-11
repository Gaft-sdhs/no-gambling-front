const TutorialModal = ({ currentSlide, setCurrentSlide, setShowTutorialModal, completeTutorial }) => {
  const slides = [
    {
      title: '게임에 오신 것을 환영합니다',
      content: '이 게임은 간단한 배팅 게임입니다. 5분 동안 배팅을 할 수 있습니다.',
    },
    {
      title: '게임 방법',
      content: '1부터 30까지의 랜덤 값(target)과 1부터 9까지의 세 개의 랜덤 값(1, 2, 3)을 더한 값을 예측합니다.',
    },
    {
      title: '배팅하기',
      content: '+, -, = 버튼을 사용하여 target 값과 1, 2, 3 합(res)의 관계를 예측하고 배팅합니다.',
    }
  ];

  const handleCompleteTutorial = () => {
    completeTutorial();
    setShowTutorialModal(false);
  };

  return (
    <div className="modal" style={{ display: 'flex' }}>
      <div className="modal-content">
        <span className="close" onClick={handleCompleteTutorial}>&times;</span>
        <div className="tutorial-slide active">
          <h2>{slides[currentSlide].title}</h2>
          <p>{slides[currentSlide].content}</p>
          {currentSlide < slides.length - 1 ? (
            <button className="bet-button" onClick={() => setCurrentSlide(currentSlide + 1)}>다음</button>
          ) : (
            <button className="bet-button" onClick={handleCompleteTutorial}>완료</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TutorialModal;

const BettingArea = ({ hasBet, updateCurrentBet, setShowBetModal, showResults, res }) => {
  const openBetModal = (betType) => {
    if (hasBet) {
      alert("이번 라운드에 이미 배팅하셨습니다.");
      return;
    }
    updateCurrentBet(betType); // updateCurrentBet 사용
    setShowBetModal(true);
    console.log(`Bet type set to: ${betType}`); // 설정 확인
  };

  return (
    <div className="betting-area">
      <div className="bottom-box" style={{ backgroundColor: '#FF4136' }} onClick={() => openBetModal('+')}>+</div>
      <div className="bottom-box" style={{ backgroundColor: '#0074D9' }} onClick={() => openBetModal('-')}>-</div>
      <div className="bottom-box" style={{ backgroundColor: '#2ECC40' }} onClick={() => openBetModal('=')}>=</div>
      <div className="bottom-box" style={{ backgroundColor: '#FF851B' }}>
        {showResults ? res : 'res'}
      </div>
    </div>
  );
};

export default BettingArea;

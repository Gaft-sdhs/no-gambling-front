import React, { useState } from 'react';

const BetModal = ({ user, currentBet, placeBet, setShowBetModal, snailIndex }) => {
  const [betAmount, setBetAmount] = useState('');

  const handleBet = () => {
    if (betAmount === '' || parseInt(betAmount) <= 0) {
      alert('올바른 베팅 금액을 입력하세요.');
      return;
    }
    if (parseInt(betAmount) > user.assets) {
      alert('자산보다 많은 금액을 배팅할 수 없습니다.');
      return;
    }
    
    // 베팅 금액과 선택된 달팽이 인덱스를 로컬 스토리지에 저장
    const betData = { snailIndex, amount: parseInt(betAmount) };
    localStorage.setItem('snailBet', JSON.stringify(betData));

    placeBet(parseInt(betAmount));
    setShowBetModal(false);
  };

  const explanation = {
    '+': '합계 값보다 더 크다고 예측합니다.',
    '-': '합계 값보다 더 작다고 예측합니다.',
    '=': '합계 값과 같다고 예측합니다.',
  }[currentBet];

  return (
    <div className="modal" style={{ display: 'flex' }}>
      <div className="modal-content">
        <span className="close" onClick={() => setShowBetModal(false)}>&times;</span>
        <h2>배팅하기</h2>
        <p>사용자: <span id="userName">{user.name}</span></p>
        <p>자산: $<span id="userAssets">{user.assets}</span></p>
        <p id="betExplanation">{explanation}</p>
        <input 
          type="number" 
          id="betAmount" 
          value={betAmount} 
          onChange={(e) => setBetAmount(e.target.value)} 
          placeholder="배팅 금액 입력" 
        />
        <button className="bet-button" onClick={handleBet}>배팅</button>
      </div>
    </div>
  );
};

export default BetModal;

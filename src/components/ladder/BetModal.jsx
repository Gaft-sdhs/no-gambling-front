import React, { useState } from 'react';

const BetModal = ({ user, currentBet, placeBet, setShowBetModal, snailIndex }) => {
  const [betAmount, setBetAmount] = useState('');

  const handleBet = () => {
    const parsedBetAmount = parseInt(betAmount);

    if (betAmount === '' || parsedBetAmount <= 0) {
      alert('올바른 베팅 금액을 입력하세요.');
      return;
    }
    if (parsedBetAmount < 20000) {
      alert('최소 베팅 금액은 20,000원입니다.');
      return;
    }
    if (parsedBetAmount > user.money) {
      alert('자산보다 많은 금액을 배팅할 수 없습니다.');
      return;
    }

    placeBet(parsedBetAmount);
    setShowBetModal(false);
  };

  const explanation = {
    '+': '1 달팽이 에게 예측합니다.',
    '-': '2 달팽이 에게 예측합니다.',
    '=': '3 달팽이 에게 예측합니다.',
  }[currentBet];

  return (
    <div className="modal" style={{ display: 'flex' }}>
      <div className="modal-content">
        <span className="close" onClick={() => setShowBetModal(false)}>&times;</span>
        <h2>배팅하기</h2>
        <p>사용자: <span id="userName">{user.name}</span></p>
        <p>자산: $<span id="userAssets">{user.money}</span></p>
        <p id="betExplanation">{explanation}</p>
        <input 
          type="number" 
          id="betAmount" 
          value={betAmount} 
          onChange={(e) => setBetAmount(e.target.value)} 
          placeholder="금액입력 (최소 20,000원)" 
        />
        <button className="bet-button" onClick={handleBet}>배팅</button>
      </div>
    </div>
  );
};

export default BetModal;

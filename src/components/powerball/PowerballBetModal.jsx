// 파워볼 배팅 모달 컴포넌트

import React, { useState } from 'react';

// PowerballBetModal 컴포넌트: 사용자가 파워볼 게임에 배팅할 수 있도록 함
const PowerballBetModal = ({ user, currentBet, placeBet, setShowBetModal, snailIndex }) => {
  const [betAmount, setBetAmount] = useState('');

  // handleBet 함수: 배팅 금액을 검증하고 배팅을 처리
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

  // 배팅 설명을 결정하는 객체
  const explanation = {
    '+': '타켓값이 다 더한 값 보다 크다고 예측합니다.',
    '-': '타켓값이 다 더한 값 보다 작다고 예측합니다.',
    '=': '타켓값이 다 더한 값 보다 같다고 예측합니다.',
  }[currentBet];

  return (
      <div className="modal" style={{ display: 'flex' }}>
        <div className="modal-content">
          <span className="close" onClick={() => setShowBetModal(false)}>&times;</span>
          <h2>배팅하기</h2>
          {/* <p>사용자: <span id="userName">{user.name}</span></p>
        <p>자산: $<span id="userAssets">{user.money}</span></p> */}
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

export default PowerballBetModal;
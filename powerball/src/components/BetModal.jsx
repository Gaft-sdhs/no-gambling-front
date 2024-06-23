import { useState } from 'react';

const BetModal = ({ user, currentBet, placeBet, setCurrentBet, setShowBetModal }) => {
  const [betAmount, setBetAmount] = useState('');

  const handleBet = () => {
    placeBet(parseInt(betAmount));
  };

  const explanation = {
    '+': 'target 값보다 합계(res)가 더 크다고 예측합니다.',
    '-': 'target 값보다 합계(res)가 더 작다고 예측합니다.',
    '=': 'target 값과 합계(res)가 같다고 예측합니다.',
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

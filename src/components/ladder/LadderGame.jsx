import React, { useState, useEffect } from 'react';
import './css/LadderGame.css';
import LadderInner from './LadderInner';
import BetModal from './BetModal';

const LadderGame = () => {
  const [result, setResult] = useState(null);
  const [resetKey, setResetKey] = useState(0);
  const [animationFinished, setAnimationFinished] = useState(false);
  const [selected, setSelected] = useState(null); // 초기 선택값은 null
  const [startSide, setStartSide] = useState(''); // 출발 지점
  const [gameStarted, setGameStarted] = useState(false); // 게임 시작 여부
  const [user, setUser] = useState({
    name: '사용자 이름',
    money: parseInt(localStorage.getItem('userAssets')) || 100,
  });
  const [showResult, setShowResult] = useState(false); // 결과 창 보이기 여부 상태

  useEffect(() => {
    const storedMoney = parseInt(localStorage.getItem('userAssets'));
    if (storedMoney) {
      setUser((prevUser) => ({ ...prevUser, money: storedMoney }));
    }
  }, []);

  const handleStartGame = () => {
    if (!selected) return; // 선택하지 않으면 게임 시작 불가
    const outcomes = ['홀', '짝'];
    const randomResult = outcomes[Math.floor(Math.random() * outcomes.length)];
    const randomStartSide = Math.random() < 0.5 ? 'left' : 'right';
    setStartSide(randomStartSide);
    setResult(randomResult);
    setGameStarted(true); // 게임 시작 상태로 변경
    setAnimationFinished(false); // Reset animation finished state

    // 게임 애니메이션 시뮬레이션
    setTimeout(() => {
      setAnimationFinished(true);
      setShowResult(true); // 결과 창 보이기
    }, 2000); // 예시로 2초 후에 결과 애니메이션이 끝났다고 가정
  };

  const handleResetGame = () => {
    setResult(null);
    setStartSide('');
    setGameStarted(false); // 게임 시작 상태 초기화
    setResetKey((prevKey) => prevKey + 1); // Increment resetKey to force Ladder component to reset
    setShowResult(false); // 결과 창 숨기기
  };

  const handleBetModalClose = () => {
    setSelected(null); // 모달이 닫힐 때 선택 초기화
  };

  const handleBet = (amount) => {
    if (amount > user.money) {
      alert('자산보다 많은 금액을 배팅할 수 없습니다.');
      return;
    }

    // 베팅 로직 처리
    const outcomes = ['홀', '짝'];
    const randomResult = outcomes[Math.floor(Math.random() * outcomes.length)];

    setResult(randomResult);
    setAnimationFinished(true);

    // 베팅 결과 처리
    setTimeout(() => {
      if (randomResult === selected) {
        const newMoney = user.money + amount * 2;
        setUser((prevUser) => ({ ...prevUser, money: newMoney }));
        localStorage.setItem('userAssets', newMoney.toString());
        alert(`축하합니다! ${randomResult}이 맞아서 ${amount * 2}원을 획득하셨습니다.`);
      } else {
        const newMoney = user.money - amount;
        setUser((prevUser) => ({ ...prevUser, money: newMoney }));
        localStorage.setItem('userAssets', newMoney.toString());
        alert(`아쉽게도 ${randomResult}이었습니다. ${amount}원을 잃으셨습니다.`);
      }
      handleResetGame(); // 게임 초기화
    }, 8000); // 8초 후에 결과 처리
  };

  return (
    <div className="LadderGame">
      <div className="game-container">
        <div className="con">
          <div className="lf">출발</div>
          <div className="rt">출발</div>
        </div>
        <LadderInner key={resetKey} result={result} startSide={startSide} setAnimationFinished={setAnimationFinished} gameStarted={gameStarted} />
        <div className="endpoints">
          <div className="hol">홀</div>
          <div className="jjk">짝</div>
        </div>
        <div className="choice-container">
          <div className={`choice ${selected === '홀' ? 'selected' : ''}`} onClick={() => setSelected('홀')}>홀</div>
          <div className={`choice ${selected === '짝' ? 'selected' : ''}`} onClick={() => setSelected('짝')}>짝</div>
        </div>
        <button onClick={handleStartGame} className="start-button">게임 시작</button>
      </div>
      {result && animationFinished && showResult && (
        <div className="result-alert">
          {result === selected ? (
            <p className="result-text">축하합니다! {result} 입니다.</p>
          ) : (
            <p className="result-text">아쉽게도 정답은 {result} 이였습니다.</p>
          )}
          <button onClick={handleResetGame} className="result-reset-button">게임 다시하기</button>
        </div>
      )}
      {selected !== null && !gameStarted && (
        <BetModal
          user={user}
          placeBet={handleBet}
          setShowBetModal={handleBetModalClose}
        />
      )}
    </div>
  );
};

export default LadderGame;

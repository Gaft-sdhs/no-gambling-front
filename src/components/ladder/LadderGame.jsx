import React, { useState } from 'react';
import './css/LadderGame.css';
import LadderInner from './LadderInner';

function LadderGame() {
  const [result, setResult] = useState(null);
  const [resetKey, setResetKey] = useState(0);
  const [animationFinished, setAnimationFinished] = useState(false);
  const [selected, setSelected] = useState(null); // 초기 선택값은 null
  const [startSide, setStartSide] = useState(''); // 출발 지점
  const [gameStarted, setGameStarted] = useState(false); // 게임 시작 여부

  const handleStartGame = () => {
    if (!selected) return; // 선택하지 않으면 게임 시작 불가
    const outcomes = ['홀', '짝'];
    const randomResult = outcomes[Math.floor(Math.random() * outcomes.length)];
    const randomStartSide = Math.random() < 0.5 ? 'left' : 'right';
    setStartSide(randomStartSide);
    setResult(randomResult);
    setGameStarted(true); // 게임 시작 상태로 변경
    setAnimationFinished(false); // Reset animation finished state
  };

  const handleResetGame = () => {
    setResult(null);
    setStartSide('');
    setGameStarted(false); // 게임 시작 상태 초기화
    setResetKey(prevKey => prevKey + 1); // Increment resetKey to force Ladder component to reset
  };

  const handleResultAlert = () => {
    if (result && animationFinished) {
      if (result === selected) {
        alert(`축하합니다! ${result} 입니다.`);
      } else {
        alert(`아쉽게도 정답은 ${result} 이였습니다.`);
      }
      handleResetGame();
    }
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
      {result && animationFinished && handleResultAlert()}
    </div>
  );
}

export default LadderGame;

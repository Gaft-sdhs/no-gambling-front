import React, { useState, useEffect } from 'react';
import './css/LadderGame.css';
import LadderInner from './LadderInner';
import BetModal from './BetModal';

const LadderGame = () => {
  const [result, setResult] = useState(null);
  const [resetKey, setResetKey] = useState(0);
  const [animationFinished, setAnimationFinished] = useState(false);
  const [selected, setSelected] = useState(null);
  const [startSide, setStartSide] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const [user, setUser] = useState({
    name: '사용자 이름',
    money: parseInt(localStorage.getItem('userAssets')) || 100,
  });
  const [showResult, setShowResult] = useState(false);
  const [betPlaced, setBetPlaced] = useState(false); // 베팅 상태 추가
  const [gameCount, setGameCount] = useState(0); // 게임 횟수 추가
  const [buttonsDisabled, setButtonsDisabled] = useState(false); // 버튼 비활성화 상태 추가

  useEffect(() => {
    const storedMoney = parseInt(localStorage.getItem('userAssets'));
    if (storedMoney) {
      setUser((prevUser) => ({ ...prevUser, money: storedMoney }));
    }
  }, []);

  const handleStartGame = () => {
    if (!selected || betPlaced) return; // 선택하지 않았거나 베팅이 완료된 경우 실행 안함

    const randomStartSide = Math.random() < 0.5 ? 'left' : 'right';
    setStartSide(randomStartSide);

    const outcomes = ['홀', '짝'];
    let randomResult;

    if (gameCount < 2) {
      randomResult = outcomes[Math.floor(Math.random() * outcomes.length)];
    } else {
      randomResult = selected === '홀' ? '짝' : '홀';
    }

    setResult(randomResult);
    setGameStarted(true);
    setAnimationFinished(false);
    setBetPlaced(true); // 베팅 상태 업데이트
    setButtonsDisabled(true); // 버튼 비활성화 상태 업데이트

    setTimeout(() => {
      setAnimationFinished(true);
      setShowResult(true);
    }, 2000);

    setTimeout(() => {
      setButtonsDisabled(false); // 8초 후 버튼 비활성화 상태 해제
    }, 8000);
  };

  const handleResetGame = () => {
    setResult(null);
    setStartSide('');
    setGameStarted(false);
    setResetKey((prevKey) => prevKey + 1);
    setShowResult(false);
    setBetPlaced(false); // 베팅 상태 초기화
    setGameCount((prevCount) => prevCount + 1); // 게임 횟수 증가
  };

  const handleBetModalClose = () => {
    setSelected(null);
  };

  const handleBet = (amount) => {
    if (amount > user.money) {
      alert('자산보다 많은 금액을 배팅할 수 없습니다.');
      return;
    }

    if (betPlaced) {
      return; // 이미 배팅이 완료된 경우 실행 안함
    }

    const outcomes = ['홀', '짝'];
    let randomResult;

    if (gameCount < 2) {
      randomResult = outcomes[Math.floor(Math.random() * outcomes.length)];
    } else {
      randomResult = selected === '홀' ? '짝' : '홀';
    }

    setResult(randomResult);
    setAnimationFinished(true);
    setBetPlaced(true); // 배팅 상태 업데이트

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
      handleResetGame();
    }, 8000);
  };

  return (
    <div className="LadderGame">
      <div className="game-container">
        <div className="con">
          <div className="lf">출발</div>
          <div className="rt">출발</div>
        </div>
        <LadderInner key={resetKey} result={result} startSide={startSide} gameStarted={true} />
        <div className="endpoints">
          <div className="hol">홀</div>
          <div className="jjk">짝</div>
        </div>
        <div className="choice-container">
          <div
            className={`choice ${selected === '홀' ? 'selected' : ''}`}
            onClick={() => !buttonsDisabled && setSelected('홀')}
            disabled={buttonsDisabled} // 버튼 비활성화 조건 추가
          >
            홀
          </div>
          <div
            className={`choice ${selected === '짝' ? 'selected' : ''}`}
            onClick={() => !buttonsDisabled && setSelected('짝')}
            disabled={buttonsDisabled} // 버튼 비활성화 조건 추가
          >
            짝
          </div>
        </div>
        <button onClick={handleStartGame} className="start-button" disabled={!selected || betPlaced || buttonsDisabled}>게임 시작</button>
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
          buttonsDisabled={buttonsDisabled} // 베팅 버튼 비활성화 조건 추가
        />
      )}
    </div>
  );
};

export default LadderGame;

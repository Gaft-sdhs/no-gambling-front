import { useState, useEffect, useCallback } from 'react';
import User from '../models/User';
import Game from '../models/Game';
import useBars from './useBars';

// useGameState 훅 정의
const useGameState = () => {
  // User 및 Game 인스턴스 생성 및 상태 설정
  const [user] = useState(new User());
  const [game] = useState(new Game(user));

  // 게임 관련 상태 초기화
  const [currentBet, setCurrentBet] = useState(game.currentBet);
  const [betAmount, setBetAmount] = useState(game.betAmount);
  const [hasBet, setHasBet] = useState(game.hasBet);
  const [targetValue, setTargetValue] = useState(game.targetValue);
  const [values, setValues] = useState([...game.values]);
  const [bars, setBars] = useState(game.bars);
  const [showBetModal, setShowBetModal] = useState(game.showBetModal);
  const [showTutorialModal, setShowTutorialModal] = useState(game.showTutorialModal);
  const [showResults, setShowResults] = useState(false);
  const [time, setTime] = useState(game.gameTimer);
  const [isGameRunning, setIsGameRunning] = useState(true);

  // useBars 훅 사용
  useBars(setBars, game);

  // 게임 시작 함수
  const startGame = () => {
    game.startGame();
    setTime(game.gameTimer);
    setHasBet(game.hasBet);
    setTargetValue(game.targetValue);
    setValues([...game.values]);
    setIsGameRunning(true);
  };

  // 결과 타이머 시작 함수
  const startResultTimer = () => {
    setTime(game.resultTimer);
    setIsGameRunning(false);
    setShowResults(true);
  };

  // 베팅 처리 함수
  const placeBet = (amount) => {
    game.placeBet(amount);
    setHasBet(game.hasBet);
    setBetAmount(game.betAmount);
    setShowBetModal(game.showBetModal);
  };

  // 튜토리얼 완료 처리 함수
  const completeTutorial = () => {
    user.completeTutorial();
    setShowTutorialModal(false);
  };

  // 타이머 종료 처리 함수
  const handleTimeEnd = useCallback(() => {
    if (isGameRunning) {
      game.endGame();
      setValues([...game.values]);
      startResultTimer();
    } else {
      setShowResults(false);
      startGame();
    }
  }, [isGameRunning, game]);

  // 타이머 관리
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(interval);
          handleTimeEnd();
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [handleTimeEnd]);

  // 상태 및 함수 반환
  return {
    user,
    currentBet,
    setCurrentBet,
    betAmount,
    hasBet,
    time,
    targetValue,
    values,
    bars,
    showBetModal,
    setShowBetModal,
    showTutorialModal,
    setShowTutorialModal,
    startGame,
    placeBet,
    completeTutorial,
    showResults,
    isGameRunning,
  };
};

export default useGameState;

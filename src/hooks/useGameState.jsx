// 게임 상태를 관리하는 커스텀 훅

import { useState, useEffect, useCallback } from 'react';
import User from '../models/User';
import Game from '../models/Game';
import useBars from './useBars';

const useGameState = () => {
  const [user] = useState(new User());
  const [game] = useState(new Game(user));

  const [currentBet, setCurrentBet] = useState(null);
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

  useBars(setBars, game);

  // 현재 배팅을 업데이트하는 함수
  const updateCurrentBet = (bet) => {
    setCurrentBet(bet);
    game.currentBet = bet;
  };

  // 게임을 시작하는 함수
  const startGame = () => {
    game.startGame();
    setTime(game.gameTimer);
    setHasBet(game.hasBet);
    setTargetValue(game.targetValue);
    setValues([...game.values]);
    setIsGameRunning(true);
  };

  // 결과 타이머를 시작하는 함수
  const startResultTimer = () => {
    setTime(game.resultTimer);
    setIsGameRunning(false);
    setShowResults(true);
  };

  // 배팅을 처리하는 함수
  const placeBet = (amount) => {
    game.placeBet(amount);
    setHasBet(game.hasBet);
    setBetAmount(game.betAmount);
    setShowBetModal(game.showBetModal);
  };

  // 튜토리얼 완료를 처리하는 함수
  const completeTutorial = () => {
    user.completeTutorial();
    setShowTutorialModal(false);
  };

  // 시간이 종료되었을 때 처리하는 함수
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

  return {
    user,
    currentBet,
    updateCurrentBet,
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
import { useState, useEffect } from 'react';
import User from '../models/User';
import Game from '../models/Game';
import useTimer from './useTimer';
import useBars from './useBars';

const useGameState = () => {
  const [user] = useState(new User());
  const [game] = useState(new Game(user));

  const [currentBet, setCurrentBet] = useState(game.currentBet);
  const [betAmount, setBetAmount] = useState(game.betAmount);
  const [hasBet, setHasBet] = useState(game.hasBet);
  const [targetValue, setTargetValue] = useState(game.targetValue);
  const [values, setValues] = useState(game.values);
  const [bars, setBars] = useState(game.bars);
  const [showBetModal, setShowBetModal] = useState(game.showBetModal);
  const [showTutorialModal, setShowTutorialModal] = useState(game.showTutorialModal);

  const [gameTimer, setGameTimer] = useTimer(game.gameTimer, game.endGame.bind(game));
  const [resultTimer, setResultTimer] = useTimer(game.resultTimer, game.startGame.bind(game));
  useBars(setBars, game);

  const startGame = () => {
    game.startGame();
    setGameTimer(game.gameTimer);
    setHasBet(game.hasBet);
    setTargetValue(game.targetValue);
  };

  const placeBet = (amount) => {
    game.placeBet(amount);
    setHasBet(game.hasBet);
    setBetAmount(game.betAmount);
    setShowBetModal(game.showBetModal);
  };

  const completeTutorial = () => {
    user.completeTutorial();
    setShowTutorialModal(false);
  };

  return {
    user,
    currentBet,
    setCurrentBet,
    betAmount,
    hasBet,
    gameTimer,
    resultTimer,
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
  };
};

export default useGameState;

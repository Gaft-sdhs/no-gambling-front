import { getRandomMultiplier } from '../utils';
import { updateBars } from '../utils/bars';

class Game {
  constructor(user) {
    this.user = user;
    this.resetGame();
  }

  resetGame() {
    this.currentBet = null;
    this.betAmount = 0;
    this.hasBet = false;
    this.gameTimer = 300;
    this.resultTimer = 120;
    this.targetValue = Math.floor(Math.random() * 30) + 1;
    this.values = [0, 1, 2, 3];
    this.bars = [33, 33, 34];
    this.showBetModal = false;
    this.showTutorialModal = !this.user.tutorialCompleted;
  }

  startGame() {
    this.gameTimer = 300;
    this.hasBet = false;
    this.targetValue = Math.floor(Math.random() * 30) + 1;
    this.setBars();
  }

  setBars() {
    this.bars = updateBars();
  }

  endGame() {
    const value1 = Math.floor(Math.random() * 9) + 1;
    const value2 = Math.floor(Math.random() * 9) + 1;
    const value3 = Math.floor(Math.random() * 9) + 1;
    const result = value1 + value2 + value3;

    this.values = [this.targetValue, value1, value2, value3];

    if (this.currentBet) {
      let winAmount = 0;
      if (this.currentBet === '+' && result > this.targetValue) {
        winAmount = getRandomMultiplier() * this.betAmount;
      } else if (this.currentBet === '-' && result < this.targetValue) {
        winAmount = getRandomMultiplier() * this.betAmount;
      } else if (this.currentBet === '=' && result === this.targetValue) {
        winAmount = this.betAmount * 3;
      }

      if (winAmount > 0) {
        this.user.updateAssets(winAmount);
      } else {
        this.user.updateAssets(-this.betAmount);
      }
    }

    setTimeout(() => this.startResultTimer(), 1000);
  }

  startResultTimer() {
    this.resultTimer = 120;
  }

  placeBet(amount) {
    if (amount && amount <= this.user.assets) {
      this.hasBet = true;
      this.betAmount = amount;
      this.showBetModal = false;
      this.user.deductAssets(amount);
    } else {
      alert('유효한 배팅 금액을 입력해주세요.');
    }
  }

  toggleBetModal(show) {
    this.showBetModal = show;
  }

  toggleTutorialModal(show) {
    this.showTutorialModal = show;
  }
}

export default Game;

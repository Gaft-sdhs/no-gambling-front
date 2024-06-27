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
    this.resultTimer = 180; 
    this.targetValue = Math.floor(Math.random() * 30) + 1;
    this.values = this.generateRandomValues();
    this.bars = [33, 33, 34];
    this.showBetModal = false;
    this.showTutorialModal = !this.user.tutorialCompleted;
  }

  generateRandomValues() {
    return [
      this.targetValue,
      Math.floor(Math.random() * 9) + 1,
      Math.floor(Math.random() * 9) + 1,
      Math.floor(Math.random() * 9) + 1,
    ];
  }

  startGame() {
    this.gameTimer = 300;
    this.hasBet = false;
    this.currentBet = null;
    this.targetValue = Math.floor(Math.random() * 30) + 1;
    this.values = this.generateRandomValues();
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

    let message = "배팅을 하지 않았습니다.";

    if (this.hasBet && this.currentBet) {
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
        message = `결과! 성공입니다. ${winAmount} 얻음`;
      } else {
        this.user.updateAssets(-this.betAmount);
        message = "결과! 실패입니다.";
      }
    }

    setTimeout(() => this.startResultTimer(), 1000);
    return message;
  }

  startResultTimer() {
    this.resultTimer = 180;
  }

  placeBet(amount, betType) {
    if (amount && amount <= this.user.assets) {
      this.hasBet = true;
      this.betAmount = amount;
      this.currentBet = betType;
      this.showBetModal = false;
      this.user.deductAssets(amount);
      console.log(`User bet: ${amount} on ${betType}`); 
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

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
    this.gameTimer = 60;
    this.resultTimer = 30;
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
    this.gameTimer = 60;
    this.hasBet = false;
    this.targetValue = Math.floor(Math.random() * 30) + 1;
    this.values = this.generateRandomValues();
    this.setBars();
  }

  setBars() {
    this.bars = updateBars();
  }

  endGame() {
    if (!this.hasBet) {
      alert('배팅을 하지 않았습니다.');
      this.startResultTimer();
      return;
    }

    const value1 = Math.floor(Math.random() * 9) + 1;
    const value2 = Math.floor(Math.random() * 9) + 1;
    const value3 = Math.floor(Math.random() * 9) + 1;
    const result = value1 + value2 + value3;

    this.values = [this.targetValue, value1, value2, value3];

    let winAmount = 0;
    let message = '';

    
    if (this.currentBet === '+' && result > this.targetValue) {
      winAmount = this.betAmount * 2;  
      message = `성공! $${winAmount}를 얻었습니다.`;
    } else if (this.currentBet === '-' && result < this.targetValue) {
      winAmount = this.betAmount * 2;  
      message = `성공! $${winAmount}를 얻었습니다.`;
    } else if (this.currentBet === '=' && result === this.targetValue) {
      winAmount = this.betAmount * 3;  
      message = `성공! $${winAmount}를 얻었습니다.`;
    } else {
      winAmount = -this.betAmount; 
      message = `실패! $${Math.abs(winAmount)}를 잃었습니다.`;
    }

    this.user.updateAssets(winAmount);

    setTimeout(() => {
      alert(message);
      this.startResultTimer();
    }, 1000);
  }

  startResultTimer() {
    this.resultTimer = 30;
  }

  placeBet(amount) {
    if (amount && amount <= this.user.assets) {
      this.hasBet = true;
      this.betAmount = amount;
      this.showBetModal = false;
      this.user.deductAssets(amount);
      console.log(`Updated assets after bet: ${this.user.assets}`);
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

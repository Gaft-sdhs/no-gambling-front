// Game 클래스 정의
class Game {
  constructor(user) {
    this.user = user;
    this.resetGame(); // 게임 초기화
    this.userWinCount = 0; // 사용자의 승리 횟수 초기화
  }

  // 게임 초기화 메서드
  resetGame() {
    this.currentBet = null;
    this.betAmount = 0;
    this.hasBet = false;
    this.gameTimer = 60; // 게임 타이머 설정
    this.resultTimer = 30; // 결과 타이머 설정
    this.targetValue = Math.floor(Math.random() * 30) + 1; // 목표 값 설정
    this.values = this.generateRandomValues(); // 랜덤 값 생성
    this.bars = [33, 33, 34]; // 바 초기 설정
    this.showBetModal = false;
    this.showTutorialModal = !this.user.tutorialCompleted; // 튜토리얼 모달 표시 여부
  }

  // 랜덤 값 생성 메서드
  generateRandomValues() {
    return [
      this.targetValue,
      Math.floor(Math.random() * 9) + 1,
      Math.floor(Math.random() * 9) + 1,
      Math.floor(Math.random() * 9) + 1,
    ];
  }

  // 게임 시작 메서드
  startGame() {
    this.gameTimer = 60;
    this.hasBet = false;
    this.targetValue = Math.floor(Math.random() * 30) + 1;
    this.values = this.generateRandomValues();
    this.setBars(); // 바 업데이트

    // 1부터 9까지의 세 개의 랜덤 숫자 합계 출력
    console.log(`랜덤 값들: ${this.values.slice(1).join(', ')}`);
    console.log(`랜덤 값의 합계: ${this.values.slice(1).reduce((acc, val) => acc + val, 0)}`);
  }

  // 바 업데이트 메서드
  setBars() {
    const value1 = Math.random() * 50;
    const value2 = Math.random() * (50 - value1);
    const value3 = 100 - value1 - value2;

    this.bars = [value1, value2, value3];
  }

  // 게임 종료 메서드
  endGame() {
    if (!this.hasBet) {
      alert("배팅을 하지 않았습니다.");
      this.startResultTimer(); // 결과 타이머 시작
      return;
    }

    // 결과 값 계산
    const value1 = Math.floor(Math.random() * 9) + 1;
    const value2 = Math.floor(Math.random() * 9) + 1;
    const value3 = Math.floor(Math.random() * 9) + 1;
    let result = value1 + value2 + value3;

    // 사용자가 3번 이길 때까지 결과를 조작
    if (this.userWinCount < 3) {
      if (this.currentBet === "+") {
        result = this.targetValue + 1;
      } else if (this.currentBet === "-") {
        result = this.targetValue - 1;
      } else if (this.currentBet === "=") {
        result = this.targetValue;
      }
      this.userWinCount++;
    } else {
      // 사용자가 계속 지도록 결과를 조작
      if (this.currentBet === "+") {
        result = this.targetValue - 1;
      } else if (this.currentBet === "-") {
        result = this.targetValue + 1;
      } else if (this.currentBet === "=") {
        result = this.targetValue + 1; // 평소에 '=' 배팅이 맞지 않도록 설정
      }
    }

    this.values = [this.targetValue, value1, value2, value3];

    console.log(`결과 값: ${result}`); // 결과 값을 콘솔에 출력

    let winAmount = 0;
    let message = "";

    // 베팅 결과 처리
    console.log(`currentBet: ${this.currentBet}, result: ${result}, targetValue: ${this.targetValue}`);

    if (this.currentBet === "+" && result > this.targetValue) {
      winAmount = this.betAmount * 2;
      message = `성공! $${winAmount}를 얻었습니다.`;
    } else if (this.currentBet === "-" && result < this.targetValue) {
      winAmount = this.betAmount * 2;
      message = `성공! $${winAmount}를 얻었습니다.`;
    } else if (this.currentBet === "=" && result === this.targetValue) {
      winAmount = this.betAmount * 3;
      message = `성공! $${winAmount}를 얻었습니다.`;
    } else {
      winAmount = 0; // 틀렸을 때 추가 차감 없음
      message = `실패! $${Math.abs(this.betAmount)}를 잃었습니다.`;
    }

    // 자산 업데이트
    this.user.updateAssets(winAmount);

    // 결과 메시지 표시
    setTimeout(() => {
      alert(message);
      this.startResultTimer();
    }, 1000);
  }

  // 결과 타이머 시작 메서드
  startResultTimer() {
    this.resultTimer = 30;
  }

  // 베팅 처리 메서드
  placeBet(amount) {
    if (amount && amount <= this.user.assets) {
      this.hasBet = true;
      this.betAmount = amount;
      this.showBetModal = false;
      this.user.deductAssets(amount); // 자산 차감
      console.log(`Updated assets after bet: ${this.user.assets}`);
    } else {
      alert("유효한 배팅 금액을 입력해주세요.");
    }
  }

  // 베팅 모달 표시 여부 토글
  toggleBetModal(show) {
    this.showBetModal = show;
  }

  // 튜토리얼 모달 표시 여부 토글
  toggleTutorialModal(show) {
    this.showTutorialModal = show;
  }
}

export default Game;
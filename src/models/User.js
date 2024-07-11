// User 클래스 정의
class User {
  constructor(name = "user", assets = 1000000) {
    this.name = name;
    this.assets = assets;
    this.tutorialCompleted = false;
    this.loadFromLocalStorage(); // 로컬 스토리지에서 사용자 데이터 로드
  }

  // 로컬 스토리지에서 사용자 데이터 로드
  loadFromLocalStorage() {
    const savedName = localStorage.getItem('userName');
    const savedAssets = localStorage.getItem('userAssets');
    const savedTutorialCompleted = localStorage.getItem('tutorialCompleted');

    if (savedName) this.name = savedName;
    if (savedAssets !== null) {
      this.assets = parseInt(savedAssets, 10);
    } else {
      this.assets = 1000000; // 처음 접속 시 100만 원 지급
      this.saveToLocalStorage();
    }
    if (savedTutorialCompleted) this.tutorialCompleted = savedTutorialCompleted === 'true';
  }

  // 사용자 데이터를 로컬 스토리지에 저장
  saveToLocalStorage() {
    localStorage.setItem('userName', this.name);
    localStorage.setItem('userAssets', this.assets);
    localStorage.setItem('tutorialCompleted', this.tutorialCompleted);
  }

  // 자산 업데이트 메서드
  updateAssets(amount) {
    this.assets += amount;
    this.saveToLocalStorage();
    console.log(`Updated assets: ${this.assets}`);
  }

  // 자산 차감 메서드
  deductAssets(amount) {
    this.assets -= amount;
    this.saveToLocalStorage();
    console.log(`Updated assets after bet: ${this.assets}`);
  }

  // 튜토리얼 완료 메서드
  completeTutorial() {
    this.tutorialCompleted = true;
    this.saveToLocalStorage();
    console.log(`Tutorial completed: ${this.tutorialCompleted}`);
  }
}

export default User;
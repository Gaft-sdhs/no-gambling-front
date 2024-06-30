// User 클래스 정의
class User {
  constructor(name = "user", assets = 1000000) {
    this.name = name; // 사용자 이름 설정
    this.assets = assets; // 자산 초기 설정
    this.tutorialCompleted = false; // 튜토리얼 완료 여부
    this.loadFromLocalStorage(); // 로컬 저장소에서 데이터 불러오기
  }

  // 로컬 저장소에서 사용자 데이터 불러오기
  loadFromLocalStorage() {
    const savedName = localStorage.getItem('userName');
    const savedAssets = localStorage.getItem('userAssets');
    const savedTutorialCompleted = localStorage.getItem('tutorialCompleted');
    if (savedName) this.name = savedName;
    if (savedAssets) this.assets = parseInt(savedAssets, 10);
    if (savedTutorialCompleted) this.tutorialCompleted = savedTutorialCompleted === 'true';
  }

  // 사용자 데이터를 로컬 저장소에 저장
  saveToLocalStorage() {
    localStorage.setItem('userName', this.name);
    localStorage.setItem('userAssets', this.assets);
    localStorage.setItem('tutorialCompleted', this.tutorialCompleted);
  }

  // 자산 업데이트 메서드
  updateAssets(amount) {
    this.assets += amount;
    this.saveToLocalStorage(); // 변경 사항 저장
    console.log(`Updated assets: ${this.assets}`);
  }

  // 자산 차감 메서드
  deductAssets(amount) {
    this.assets -= amount;
    this.saveToLocalStorage(); // 변경 사항 저장
    console.log(`Updated assets after bet: ${this.assets}`);
  }

  // 튜토리얼 완료 처리 메서드
  completeTutorial() {
    this.tutorialCompleted = true;
    this.saveToLocalStorage(); // 변경 사항 저장
    console.log(`Tutorial completed: ${this.tutorialCompleted}`);
  }
}

export default User;

class User {
  constructor(name = "user", assets = 1000000) {
    this.name = name;
    this.assets = assets;
    this.tutorialCompleted = false;
    this.loadFromLocalStorage();
  }

  loadFromLocalStorage() {
    const savedName = localStorage.getItem('userName');
    const savedAssets = localStorage.getItem('userAssets');
    const savedTutorialCompleted = localStorage.getItem('tutorialCompleted');
    if (savedName) this.name = savedName;
    if (savedAssets) this.assets = parseInt(savedAssets, 10);
    if (savedTutorialCompleted) this.tutorialCompleted = savedTutorialCompleted === 'true';
  }

  saveToLocalStorage() {
    localStorage.setItem('userName', this.name);
    localStorage.setItem('userAssets', this.assets);
    localStorage.setItem('tutorialCompleted', this.tutorialCompleted);
  }

  updateAssets(amount) {
    this.assets += amount;
    this.saveToLocalStorage();
    console.log(`Updated assets: ${this.assets}`);
  }

  deductAssets(amount) {
    this.assets -= amount;
    this.saveToLocalStorage();
    console.log(`Updated assets after bet: ${this.assets}`);
  }

  completeTutorial() {
    this.tutorialCompleted = true;
    this.saveToLocalStorage();
    console.log(`Tutorial completed: ${this.tutorialCompleted}`);
  }
}

export default User;

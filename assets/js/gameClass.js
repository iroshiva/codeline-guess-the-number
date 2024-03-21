class Game {
  score = 0;
  guessNumber = 0;
  isGoodNumber = false;
  scoreElement = document.querySelector(".guess__score");
  formElement = document.querySelector(".guess__form");
  messageElement = document.querySelector(".guess__message");
  progressElement = document.querySelector(".guess__result");
  replayElement = document.querySelector(".guess__replay");

  init() {
    this.generateGuessNumber();

    this.formElement?.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const number = formData.get("number");
      this.incrementScore();
      this.compareNumber(number);
    });

    this.replayElement?.addEventListener("click", (e) => {
      e.preventDefault();
      this.resetGame();
    });
  }

  generateGuessNumber() {
    this.guessNumber = Math.floor(Math.random() * 500);
  }

  compareNumber(userNumber) {
    if (!this.messageElement || !this.replayElement) {
      return;
    }

    if (userNumber > 500 || userNumber < 0) {
      this.messageElement.innerHTML = `🔴 My guess must be between 0 and 500 !`;
      return;
    }

    if (this.guessNumber > userNumber) {
      this.messageElement.innerHTML = `🔴 My guess is up to ${userNumber}.`;
    } else if (this.guessNumber < userNumber) {
      this.messageElement.innerHTML = `🔴 My guess is below ${userNumber}.`;
    } else {
      this.messageElement.innerHTML = `🟢 You've found my guess : it's ${this.guessNumber}.`;
      this.replayElement.style.display = "block";
    }

    this.addProgressResult(userNumber);
  }

  incrementScore() {
    this.score += 5;
    if (!this.scoreElement) {
      return;
    }
    this.scoreElement.innerHTML = String(this.score);
  }

  addProgressResult(userNumber) {
    if (!this.progressElement) {
      return;
    }
    const resultPosition = (userNumber * 100) / 500;
    const newResult = document.createElement("p");
    newResult.style.position = "absolute";
    newResult.style.transform = "translate(-50%, -50%)";
    newResult.style.top = "45%";
    newResult.style.left = `${resultPosition}%`;
    newResult.innerHTML = userNumber != this.guessNumber ? "x" : "🟢";
    this.progressElement.appendChild(newResult);
  }

  resetGame() {
    if (
      !this.messageElement ||
      !this.scoreElement ||
      !this.progressElement ||
      !this.formElement ||
      !this.replayElement
    ) {
      return;
    }

    this.messageElement.innerHTML = "";
    this.score = 0;
    this.scoreElement.innerHTML = String(this.score);

    while (this.progressElement.firstChild) {
      this.progressElement.removeChild(this.progressElement.firstChild);
    }
    this.formElement.reset();
    this.replayElement.style.display = "none";
    this.generateGuessNumber();
  }
}

export default Game;

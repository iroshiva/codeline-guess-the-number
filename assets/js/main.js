import "../sass/main.scss";
import Game from "./gameClass";

/*
 * Display and initiate the Game when click on start.
 */
const onClickStartBtn = () => {
  const startBtn = document.querySelector(".btn-start");
  const startContainer = document.querySelector("#start");
  const guessContainer = document.querySelector("#guess");

  if (!startBtn) {
    return;
  }

  startBtn.addEventListener("click", () => {
    if (!startContainer) {
      return;
    }
    startContainer.style.display = "none";

    if (!guessContainer) {
      return;
    }
    guessContainer.style.display = "flex";

    const game = new Game();
    game.init();
  });
};

window.addEventListener("load", onClickStartBtn);

const computer = document.querySelector(".computer img");
const player = document.querySelector(".player img");
const computerPoints = document.querySelector(".computerPoints");
const playerPoints = document.querySelector(".playerPoints");
const options = document.querySelectorAll(".options button");
const highestScoreElement = document.querySelector(".highestScore");

// Load highest score from localStorage
let highestScore = parseInt(localStorage.getItem("highestScore")) || 0;
highestScoreElement.innerText = highestScore;

options.forEach((option) => {
  option.addEventListener("click", () => {
    computer.classList.add("shakeComputer");
    player.classList.add("shakePlayer");

    setTimeout(() => {
      computer.classList.remove("shakeComputer");
      player.classList.remove("shakePlayer");

      player.src = "images/" + option.innerHTML + "Player.png";

      const choice = ["STONE", "PAPER", "SCISSORS"];
      let arrayNo = Math.floor(Math.random() * 3);
      let computerChoice = choice[arrayNo];
      computer.src = "images/" + computerChoice + "Computer.png";

      let cPoints = parseInt(computerPoints.innerHTML);
      let pPoints = parseInt(playerPoints.innerHTML);

      const updatePlayerScore = () => {
        playerPoints.innerHTML = pPoints + 1;
        if (pPoints + 1 > highestScore) {
          highestScore = pPoints + 1;
          localStorage.setItem("highestScore", highestScore);
          highestScoreElement.innerText = highestScore;
        }
      };

      if (option.innerHTML === "STONE") {
        if (computerChoice === "PAPER")
          computerPoints.innerHTML = cPoints + 1;
        else if (computerChoice === "SCISSORS")
          updatePlayerScore();
      } else if (option.innerHTML === "PAPER") {
        if (computerChoice === "SCISSORS")
          computerPoints.innerHTML = cPoints + 1;
        else if (computerChoice === "STONE")
          updatePlayerScore();
      } else {
        if (computerChoice === "STONE")
          computerPoints.innerHTML = cPoints + 1;
        else if (computerChoice === "PAPER")
          updatePlayerScore();
      }
    }, 900);
  });
});

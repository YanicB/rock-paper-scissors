function getComputerChoice() {
  const random = Math.floor(Math.random() * 10);
  let value = "";

  if (random % 3 === 0) {
    value = "rock";
  } else if (random % 2 === 0) {
    value = "paper";
  } else {
    value = "scissors";
  }
  return value;
}

// Get DOM elements
const rockBtn = document.querySelector(".rock-button");
const paperBtn = document.querySelector(".paper-button");
const scissorsBtn = document.querySelector(".scissors-button");
const resultsDisplay = document.querySelector(".results");
const scoreDisplay = document.querySelector(".gamescore");

// Initialize scores
let computerScore = 0;
let humanScore = 0;

// Add event listeners to buttons
rockBtn.addEventListener("click", () => {
  playRound("rock");
});

paperBtn.addEventListener("click", () => {
  playRound("paper");
});

scissorsBtn.addEventListener("click", () => {
  playRound("scissors");
});

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    resultsDisplay.textContent = `It's a tie! Both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    resultsDisplay.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    humanScore++;
  } else {
    resultsDisplay.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    computerScore++;
  }

  scoreDisplay.textContent = `Score - You: ${humanScore}, Computer: ${computerScore}`;
}

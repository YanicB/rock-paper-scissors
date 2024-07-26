//create function getComputerChoice
//create variable "random"
//assign "random" with the Math.floor() and Math.random method * 10, to get a number between 0 and 10
//create variable "value"
//if random is divisible by 3, then return rock
//else if random is disible my 2, then return paper
//else returns scissors

function getComputerChoice() {
    let random = Math.floor(Math.random() * 10);
    let value = "";

    if (random % 3 === 0) {
        value = "rock";
    }
    else if (random % 2 === 0) {
        value = "paper";
    }
    else {
        value = "scissors";
    }
    return value;
    }

//create function getHumanChoice
//create a variable to get the user's choice
//restrict it so it can only be "rock", "paper", "scissors"
//if they choose anything but this put an error message


function getHumanChoice() {
    choice = prompt("Choose between rock, paper, scissors");
    lowercased = choice.toLowerCase();

    if ((lowercased === "rock") || (lowercased === "paper") || (lowercased === "scissors")) {
        finalChoice = lowercased;
    }
    else {
        finalChoice = "This answer is not rock, paper or scissors" ;
    }
    return finalChoice;
}

//keep track of human and robot wins
//create two variables, humanScore and computerScore

let humanScore = 0;
let computerScore = 0;

//create new function playRound with getHumanChoice and getComputerChoice as parameters
//depending on what each value chooses, print a message for the winner
//increment the score for the winner by 1

function playRound(humanChoice, computerChoice) {
    let answer = ""
    if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose, better luck next time.");
        computerScore++;
    }    
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win, good job!");
        humanScore++;
    }
    
    else if (humanChoice === "scissors" && computerChoice === "scissors") {
        console.log("It's a tie, try again.");
    }

    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win, good job!");
        humanScore++;
    }

    else if (humanChoice === "rock" && computerChoice === "rock") {
        console.log("It's a tie, try again.");
    }

    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose, better luck next time.");
        computerScore++;
    }

    else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("It's a tie, try again.");
    }

    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose, better luck next time.");
        computerScore++;
    }

    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win, good job!");
        humanScore++;
    }
  }
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

function playGame() {
    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Computer: ${computerScore}`);
        console.log(`You: ${humanScore}`);
    }

    if (humanScore > computerScore) {
        console.log("Congrats, you are the winner.");
    }
    else if (computerScore > humanScore) {
        console.log("You lost, better luck next time.");
    }
    else {
        console.log("It was a tie.");
    }
}

playGame();

  //create function called playGame
  //create variable called round to keep track of games played 
  //for every game played, increment "round" by 1
  //once round has reached 5, then declare who has won more games 



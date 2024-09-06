const humanSelection = getHumanChoice();
console.log(humanSelection);
const computerSelection = getComputerChoice();
console.log(computerSelection);

function getComputerChoice() {
    let x = Math.random() * 10;
    console.log(x);
    if (x <= 3.33 ) {
        return "Rock";
    } else if (x > 3.33 && x < 6.67) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let y = prompt("Choose between, Rock, Paper, or Scissors by typing in your selection.").toLowerCase();
    if (y === "rock") {
        return "Rock";
    } else if (y === "paper") {
        return "Paper";
    } else if (y === "scissors") {
        return "Scissors";
    } else {
        alert ("If you don't type Rock, Paper, or Scissors into the text box we are going to be here for a while.");
        return getHumanChoice();
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    playRound(humanSelection, computerSelection);
    
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return console.log("It's a Draw!");
        } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
            humanScore++;
            return console.log("You win this round! Rock beats Scissors :)");
        } else if (humanChoice === "Rock" && computerChoice === "Paper") {
            computerScore++;
            return console.log("You lose this round! Paper beats Rock :(");
        } else if (humanChoice === "Paper" && computerChoice === "Rock") {
            humanScore++;
            return console.log("You win this round! Paper beats Rock :)");
        } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
            computerScore++;
            return console.log("You lose this round! Scissors beats Paper :(");
        } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
            humanScore++;
            return console.log("You win this round! Scissors beats Paper :)");
        } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
            computerScore++;
            return console.log("You lose this round! Rock beats Scissors :(");
        }
    }
    console.log(humanScore);
    console.log(computerScore);
}

playGame();



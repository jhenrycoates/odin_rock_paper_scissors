let playerScore = 0;
let computerScore = 0;
const playerRock = document.querySelector(".rock");
const playerPaper = document.querySelector(".paper");
const playerScissors = document.querySelector(".scissors");
const roundResultText = document.querySelector(".roundResult");
const playerScoreNumber = document.querySelector(".playerScoreNumber");
const computerScoreNumber = document.querySelector('.computerScoreNumber');
const finalResultText = document.querySelector(".finalResult");

function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    const optionsIndex = Math.floor(Math.random() * options.length);
    return options[optionsIndex];
}

function getRoundWinner(player, computer) {
    return (
        player === "Rock" && computer === "Scissors" ||
        player === "Paper" && computer === "Rock" ||
        player === "Scissors" && computer === "Paper"
    );
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    if (getRoundWinner(playerChoice, computerChoice)) {
        playerScore++;
        return `Player wins this round! ${playerChoice} beats ${computerChoice}.`;
    } else if (playerChoice === computerChoice) {
        return `This round is a draw. Both player and computer chose ${playerChoice}.`;
    } else {
        computerScore++;
        return `Computer wins this round! ${computerChoice} beats ${playerChoice}.`
    }
}

function updateResults(playerChoice) {
    roundResultText.innerText = playRound(playerChoice);
    playerScoreNumber.innerText = playerScore;
    computerScoreNumber.innerText = computerScore;
    
    if (playerScore === 5 || computerScore === 5) {
        finalResultText.innerText = `${playerScore === 3 ? "Player" : "Computer"} has won the game!` 
    }
}

playerRock.addEventListener("click", function() {
    updateResults("Rock");
});
playerPaper.addEventListener("click", function() {
    updateResults("Paper");
});
playerScissors.addEventListener("click", function() {
    updateResults("Scissors");
});

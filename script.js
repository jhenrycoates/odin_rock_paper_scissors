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
console.log(getComputerChoice());

function getHumanChoice() {
    let y = prompt("Choose between, Rock, Paper, or Scissors by typing in your selection.");
    console.log(y)
    if (y === "Rock") {
        return "Rock";
    } else if (y === "Paper") {
        return "Paper";
    } else if (y === "Scissors") {
        return "Scissors";
    } else {
        return getHumanChoice();
    }
}

console.log(getHumanChoice());
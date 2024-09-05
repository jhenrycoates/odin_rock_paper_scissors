let x = Math.random() * 10;
console.log(x);

function getComputerChoice (x) {
    if (x <= 3.33 ) {
        return "Rock";
    } else if (x > 3.33 && x < 6.66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
console.log(getComputerChoice(x));

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//generates secret number to guess
const generateTarget = () => Math.floor(Math.random() * 9);


const compareGuesses = (userGuess, computerGuess, secretNumber) => {
    userGuess = Math.abs(secretNumber - userGuess);
    computerGuess = Math.abs(secretNumber - computerGuess);
    console.log(userGuess);
    console.log(computerGuess);
    if (userGuess === computerGuess || userGuess < computerGuess) {
        return true
    }
    else {
        return false
    }
}

const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++
    }
    if (winner === 'computer') {
        computerScore++
    }
}

const advanceRound = () => {
    currentRoundNumber++
}


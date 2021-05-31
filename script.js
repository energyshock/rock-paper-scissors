let playerChoice;
let compChoice;
let playerValue;
let compValue;
const buttons = document.querySelectorAll('.btns');
const resetButton = document.querySelector('.reset');
console.log(buttons + resetButton)

let playerScore = 0;
let compScore = 0;

const playerScoreOutput = document.querySelector('#player_score');
playerScoreOutput.textContent = `Player Score: ${playerScore}`;

const compScoreOutput = document.querySelector('#comp_score');
compScoreOutput.textContent = `Computer Score: ${compScore}`;

const output = document.querySelector('#output');

function getPlayerChoice() {
    playerChoice = this.id;
    if (playerChoice === 'rock') {
        playerValue = 0;
    } else if (playerChoice === 'paper') {
        playerValue = 1;
    } else if (playerChoice === 'scissors') {
        playerValue = 2;
    }
    compValue = getCompChoice();
    playGame();
    
}

function getCompChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber == 0) {
        compChoice = "rock";
    } else if (randomNumber == 1) {
        compChoice = "paper";
    } else if (randomNumber == 2) {
        compChoice = "scissors";
    }
    return randomNumber;
}

function playRound() {
    let winnningNumbersArray = [
        [0, 1, 2],
        [2, 0, 1],  
        [1, 2, 0]
    ];

    let result = winnningNumbersArray[playerValue][compValue];

    if (result == 0) {
        output.textContent = `It's a tie! You chose ${playerChoice} and the computer chose ${compChoice}.`;
    } else if (result == 1) {
        output.textContent = `You lose! You chose ${playerChoice} and the computer chose ${compChoice}.`;
        compScore++;
    } else if (result == 2) {
        output.textContent = `You win! You chose ${playerChoice} and the computer chose ${compChoice}.`;
        playerScore++;
    }
}

function playGame() {
    playRound();
    playerScoreOutput.textContent = `Player Score: ${playerScore}`;
    compScoreOutput.textContent = `Computer Score: ${compScore}`;
    if (playerScore == 5) {
        output.textContent = `You won ${playerScore} to ${compScore}! Congratulations!`;
        resetGame();
    }
    else if (compScore == 5) {
        output.textContent = `You lost ${playerScore} to ${compScore}. Beep Boop too strong.`;
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    compScore = 0;
    playerScoreOutput.textContent = `Player Score: ${playerScore}`;
    compScoreOutput.textContent = `Computer Score: ${compScore}`;
    output.textContent = "Good luck again.";
}

buttons.forEach(button => button.addEventListener('click', getPlayerChoice));
resetButton.addEventListener('click', resetGame);
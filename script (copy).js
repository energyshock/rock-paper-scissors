function computerPlay() {
    let computerSelection;
    const randomNumber = Math.floor(Math.random() * 3);
    //console.log(randomNumber);

    if (randomNumber == 0) {
        computerSelection = "rock";
    } else if (randomNumber == 1) {
        computerSelection = "scissors";
    } else if (randomNumber == 2) {
        computerSelection = "paper";
    }
    return computerSelection;
}

function userInput() {
    let s = prompt("Please enter your choice:").toLowerCase().trim();
    while(s === "") {
        console.log(s);
        s = prompt("Please enter your choice:").toLowerCase().trim();
    }
    return s;
}

function game() {
    let counterPlayer = 0,  counterComputer = 0;
    for (let i = 1; i <= 5; i++) {
        const playerSelection = userInput();
        const computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        if(result) {
            counterPlayer++;
        } else {
            counterComputer++;
        }
    }
    
    if (counterPlayer < counterComputer) {
        console.log("Final result: You have lost the game");
    } else if (counterPlayer > counterComputer) {
        console.log("Final result: You have won the game");
    } else {
        console.log("Final result: It's a tie!")
    }
    

    function playRound(playerSelection, computerSelection) {
        if (playerSelection == "rock" && computerSelection == "scissors")
        {
            console.log("You Win! Rock beats Scissors");
            return true;
        } else if (playerSelection == "rock" && computerSelection == "paper") {
            console.log("You Lose! Paper beats Rock");
            return false;
        } else if (playerSelection == "rock" && computerSelection == "rock") {
            console.log("It's a tie!");
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            console.log("You Lose! Rock beats Scissors");
            return false;
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            console.log("You Win! Scissors beats Rock");
            return true;
        } else if (playerSelection == "scissors" && computerSelection == "scissors") {
            console.log("It's a tie!");
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            console.log("You Win! Paper beats Rock");
            return true;
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            console.log("You Lose! Scissors beats Paper");
            return false;
        } else if (playerSelection == "paper" && computerSelection == "paper") {
            console.log("It's a tie!");
        }
      }
}
game();


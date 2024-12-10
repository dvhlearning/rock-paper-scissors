let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randNum = Math.random();
    let choice;
    if (randNum <= 0.33) {
        choice = "rock";
    } else if (randNum <= 0.66) {
        choice = "paper";
    } else {
        choice = "scissors";
    }

    return choice;
}

function getHumanChoice(){
    let choice = prompt("Please Enter Your Choice:", "rock, paper OR scissors");
   
    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors"){
        console.log("Error: '" + humanChoice + "' is an incorrect Selection, try again.")
    } else {
        if (humanChoice === "rock"){
            if (computerChoice === "rock") {
                console.log("Tie! Scissors cancels scissors.");
            } else if (computerChoice === "paper") {
                console.log("You lose! Paper beats rock.");
                computerScore++;
            } else {
                console.log("You win! Rock beats scissors.");
                humanScore++;
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                console.log("You win! Paper beats rock.");
                humanScore++;
            } else if (computerChoice === "paper") {
                console.log("Tie! Paper cancels paper.");
            } else {
                console.log("You lose! Scissors beat paper.");
                computerScore++;
            }
        } else {
            if (computerChoice === "rock") {
                console.log("You lose! Rock beats scissors.");
                computerScore++;
            } else if (computerChoice === "paper") {
                console.log("You win! Scissors beat paper.");
                humanScore++;
            } else {
                console.log("Tie! Scissors cancel scissors.");
            }
        }

        console.log("Your Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
    }
}

playRound(getHumanChoice(),getComputerChoice());
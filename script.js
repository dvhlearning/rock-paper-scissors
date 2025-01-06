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

function replayGame() {
    let playChoice = prompt("Would you like to play again (yes or no)?:");
    if (playChoice === 'yes') {
        console.clear();
        playGame();
    } else if (playChoice === 'no') {
        console.log("\nHave a good day!");
    } else {
        console.log("Error: incorrect answer");
        playChoice = prompt("Would you like to play again (yes or no)?:");
        replayGame();
    }
}

function displayMessage(content) {
    let mBox = document.querySelector(".messageBox");
    mBox.textContent = content;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    const goalScore = 5;

    displayMessage(`Welcome to Rock Paper Scissors! You are playing to ${goalScore} points`);

    const buttons = document.querySelectorAll("button");


    function playRound(humanChoice,computerChoice) {
        console.log("You selected: " + humanChoice);
        if (humanChoice === "rock"){
            if (computerChoice === "rock") {
                console.log("Tie! Rock cancels rock.");
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
    
        console.log("Your Score: " + humanScore + " vs. Computer: " + computerScore);

        if (humanScore >= goalScore || computerScore >= goalScore) {
            if (humanScore > computerScore) {
                console.log("\nCONGRATULATIONS! You win the game!")
                console.log("Your Score: " + humanScore + " vs. Computer: " + computerScore);
            } else if (humanScore < computerScore) {
                console.log("\nTOO BAD! You lose the game!")
                console.log("Your Score: " + humanScore + " vs. Computer: " + computerScore);
            } else if (humanScore === computerScore) {
                console.log("\nYOU TIED THE GAME!")
                console.log("Your Score: " + humanScore + " vs. Computer: " + computerScore);
            }
            replayGame();
        }
    }

    buttons.forEach((button) => {
        let buttonSelection = button.id;
        button.addEventListener("click", () => {
            playRound(buttonSelection,getComputerChoice());
        });
    });

}

playGame();
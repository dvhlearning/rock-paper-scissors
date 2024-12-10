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
    let choice = prompt("Please Enter Your Choice (rock, paper or scissors):");
   
    return choice;
}

function getRoundNumber() {
    let roundNumber = prompt("Welcome to Rock Paper Scissors!\nHow many rounds would you like to play?:");

    return roundNumber;
}

function playGame() {
    let rounds = getRoundNumber();
    let humanScore = 0;
    let computerScore = 0;

    console.log("Welcome to Rock Paper Scissors!\nYou are playing to " + rounds + " rounds");

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
    
        if (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors"){
            console.log("Error: '" + humanChoice + "' is an incorrect Selection, try again.");
            humanChoice = getHumanChoice().toLowerCase();
            playRound(humanChoice, computerChoice);
        } else {
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
        }
    }

    for (let index = 0; index < rounds; index++) {
        console.log("\nROUND #" + (index + 1) + "...");
        playRound(getHumanChoice(),getComputerChoice());
    }
    
    if (humanScore > computerScore) {
        console.log("\nCONGRATULATIONS! You win the game!")
        console.log("Your Score: " + humanScore + " vs. Computer: " + computerScore);
    } else if (humanScore < computerScore) {
        console.log("\nTOO BAD! You lose the game!")
        console.log("Your Score: " + humanScore + " vs. Computer: " + computerScore);
    } else if (humanScore === computerScore) {
        console.log("\nYOU TIED THE GAME!")
        console.log("Your Score: " + humanScore + " vs. Computer: " + computerScore);
    } else {
        console.log("Error: incorrect scores")
    }
    
}

playGame();
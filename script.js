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
    const replayBox = document.querySelector(".replayBox");
    const replayButton = document.querySelector(".replayBox button");
    replayBox.style.display = "block";

    replayButton.addEventListener("click", function eventHandler() {
        //remove eventListener from replay button
        this.removeEventListener("click", eventHandler);
        //remove replay button
        replayBox.style.display = "none";
        //restart game (sets scores to 0)
        playGame();
    });

}

function displayMessage(content, location) {
    let mBox = document.querySelector(location);
    mBox.textContent = content;
}

function colorBoxes(outcome) {

    let pBox = document.querySelector(".playerSelection");
    let cBox = document.querySelector(".computerSelection");

    if (outcome === 'win'){
        pBox.style.backgroundColor = "lightgreen";
        cBox.style.backgroundColor = "pink";
    } else if (outcome === 'lose'){
        pBox.style.backgroundColor = "pink";
        cBox.style.backgroundColor = "lightgreen";
    } else if (outcome === 'draw'){
        pBox.style.backgroundColor = "#FFFFFF";
        cBox.style.backgroundColor = "#FFFFFF";
    } else if (outcome === 'default'){
        pBox.style.backgroundColor = "#FFFDD0";
        cBox.style.backgroundColor = "#FFFDD0";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    const messageLines = document.querySelector(".messageBox");
    const bottomMessage = document.querySelector('.messageBoxTier2');


    const buttons = document.querySelectorAll(".buttonBox button");
    //set score to play to
    const goalScore = 5;

    //set up page for a new game
    displayMessage(`Welcome to Rock Paper Scissors! You are playing to ${goalScore} points`,'.messageBoxTier1');
    displayMessage('','.playerSelection');
    displayMessage('','.computerSelection');
    bottomMessage.innerHTML = '&nbsp;';
    colorBoxes('default');
    messageLines.style.color = "#000000";

    function playRound(humanChoice,computerChoice) {

        displayMessage(humanChoice, '.playerSelection');
        displayMessage(computerChoice, '.computerSelection');

        if (humanChoice === "rock"){
            if (computerChoice === "rock") {
                displayMessage("Draw! Rock cancels rock.",".messageBoxTier1");
                colorBoxes('draw')
            } else if (computerChoice === "paper") {
                displayMessage("You lose! Paper beats rock.",".messageBoxTier1");
                colorBoxes('lose')
                computerScore++;
            } else {
                displayMessage("You win! Rock beats scissors.",".messageBoxTier1");
                colorBoxes('win')
                humanScore++;
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                displayMessage("You win! Paper beats rock.",".messageBoxTier1");
                colorBoxes('win')
                humanScore++;
            } else if (computerChoice === "paper") {
                displayMessage("Draw! Paper cancels paper.",".messageBoxTier1");
                colorBoxes('draw')
            } else {
                displayMessage("You lose! Scissors beat paper.",".messageBoxTier1");
                colorBoxes('lose')
                computerScore++;
            }
        } else {
            if (computerChoice === "rock") {
                displayMessage("You lose! Rock beats scissors.",".messageBoxTier1");
                colorBoxes('lose')
                computerScore++;
            } else if (computerChoice === "paper") {
                displayMessage("You win! Scissors beat paper.",".messageBoxTier1");
                colorBoxes('win')
                humanScore++;
            } else {
                displayMessage("Draw! Scissors cancel scissors.",".messageBoxTier1");
                colorBoxes('draw')
            }
        }
    
        displayMessage(`Player Score: ${humanScore} vs. Computer Score: ${computerScore}`,".messageBoxTier2");

        //end conditions met
        if (humanScore >= goalScore || computerScore >= goalScore) {
            if (humanScore > computerScore) {
                displayMessage("CONGRATULATIONS! You win the game!",".messageBoxTier1");
                messageLines.style.color = "green";
            } else if (humanScore < computerScore) {
                displayMessage("TOO BAD! You lose the game!",".messageBoxTier1");
                messageLines.style.color = "red";
            }
            //removes eventListeners from buttons
            buttons.forEach((button) => {
                let newButton = button.cloneNode(true);
                button.parentNode.replaceChild(newButton,button);
                button = newButton;
            });
            //prompts player to replay game
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
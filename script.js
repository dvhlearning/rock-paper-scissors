console.log("Hello World");

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

console.log(getComputerChoice());
console.log(getHumanChoice());
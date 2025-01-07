function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  

function getComputerChoice() {
    choices = ["rock", "paper", "scissors"];
    pick = randomIntFromInterval(0, 2);
    return choices[pick];
}

function getHumanChoice () {
    let choice = prompt("what will you throw?");
    return choice.toLowerCase();
}


let humanScore = 0;
let computerScore = 0;


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        human = humanChoice.toLowerCase();
        computer = computerChoice.toLowerCase();
    
        console.log(human, computer);
    
        if (human == computer) {
            console.log("It's a draw!");
            return;
        }
    
        else if (human == "rock") {
            if (computer == "scissors") {
                console.log("You won the round!");
                humanScore += 1;
                return;
            }
    
            if (computer == "paper") {
                console.log("You lost the round :(");
                computerScore += 1;
                return;
            }
    
        }
    
        else if (human == "paper") {
            if (computer == "scissors") {
                console.log("You lost the round :(");
                computerScore += 1;
                return;
            }
    
            if (computer == "rock") {
                console.log("You won the round!");
                humanScore += 1;
                return;
            }
    
        }
    
        else if (human == "scissors") {
            if (computer == "rock") {
                console.log("You lost the round :(");
                computerScore += 1;
                return;
            }
    
            if (computer == "paper") {
                console.log("You won the round!");
                humanScore += 1;
                return;
            }
    
        }
        
        
    }

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log(humanScore, computerScore);
    }

    if (humanScore == computerScore) {
        console.log("You drew to the computer!");
    }

    else if (humanScore > computerScore) {
        console.log("YOU WON THE GAMEEE!!! :)))")
    }

    else {
        console.log("..you lost... :/")
    }

}


playGame();

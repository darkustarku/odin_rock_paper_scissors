function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  

function getComputerChoice() {
    choices = ["rock", "paper", "scissors"];
    pick = randomIntFromInterval(0, 2);
    return choices[pick];
}

console.log(getComputerChoice());
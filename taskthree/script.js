function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
 }
 
 function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
       return "It's a tie! you both picked ${playerSelection}";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
       return "You win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
       return "You win! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
       return "You win! Scissors beats Paper";
    } else {
      return `You lose! ${computerSelection} beats ${playerSelection}`;
   }
 }

 function game(){
   for (let i = 0; i < 5; i++){
   console.log(playRound(playerPlay(), computerPlay()));
}
 }

const playerSelection = prompt("Are you feeling lucky? Start the game by picking among 'Rock, Paper or Scissors'".toLowerCase());
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))
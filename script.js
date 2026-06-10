const hand = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;

/*Escolha randomica computador*/
function getComputerChoice(){
    return hand[(Math.floor(Math.random() * hand.length))]
}

/*Função humano escolhendo um numero*/
function getHumanChoice(){
  let choice = ""; 

  while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
    choice = prompt('rock', 'paper', 'scissors').toLowerCase();
  }
  return choice;
}

function playRound(humanChoice, computerChoice){
  humanChoice = humanChoice.toLowerCase();
  if(humanChoice === computerChoice){

    return `It's a tie!`;

  }

  else if((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'paper')){
    humanScore++
    return `You win! ${humanChoice} beats ${computerChoice}`;
  }
  else{
    computerScore++
    return `You lose! ${computerChoice} beats ${humanChoice}`;
  }
} 

function playGame(){
  for(let i = 0; i < 3; i++){
    const escolhaDoHumano = getHumanChoice();
  
    const escolhaDoComputador = getComputerChoice();
    
    const resultadoDaRodada = playRound(escolhaDoHumano, escolhaDoComputador);
    
    console.log(resultadoDaRodada)
  }
  if (humanScore > computerScore) {
    return "You win the game!";
  }else {
    return "You lose the game!"
  }
}
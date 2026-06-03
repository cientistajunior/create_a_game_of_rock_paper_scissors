let hand = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;
/*Escolha randomica computador*/
function getComputerChoice(){
  function computerChoice(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
  const choiceComputerRandom = computerChoice(1,3);

  if(choiceComputerRandom === 1) {
    return hand[0];
  }
  else if(choiceComputerRandom === 2) {
    return hand[1];
  }
  else if(choiceComputerRandom === 3) {
    return hand[2];
  }
  return;
}
console.log(getComputerChoice())

/*Função humano escolhendo um numero*/
function getHumanChoice(){
  function choiceHuman(){
    return parseInt(prompt(`Bem veindo ao maior desafio de joga da velha da histoia! 
      Vamos Jogar?
      Escolha uma das tres opcoes:
      --> rock     [1]
      --> paper    [2]
      --> scissors [3]
      `))
  }
  const human = choiceHuman();

  if(human === 1){
    return hand[0]
  }
  else if(human === 2) {
    return hand[1]
  }
  else if(human === 3) {
    return hand[2]
  }
  else{
    return `Por favor digite uma opção válida! ${choiceHuman()}`
  }
}

console.log(getHumanChoice())
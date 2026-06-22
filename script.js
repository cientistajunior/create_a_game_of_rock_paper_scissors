// 1. CAPTURA DOS ELEMENTOS DO HTML
const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissors = document.querySelector('.scissors');
const roundExplanation = document.querySelector('.round-explanation');
const scoreBoard = document.querySelector('.score-board');
const finalMessage = document.querySelector('.final-message');
const btnReset = document.querySelector('.btn-reset');
const gameSubtitle = document.querySelector('.game-subtitle');

// 2. VARIÁVEIS DE ESTADO GLOBAL
const hand = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;

/* Escolha randômica computador */
function getComputerChoice(){
    return hand[(Math.floor(Math.random() * hand.length))];
}

/* Regras do Jogo (Quem ganha de quem) */
function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice === computerChoice){
        return `It's a tie!`;
    }
    else if((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'paper')){
        humanScore++;
        return `${humanChoice} beats ${computerChoice}`;
    }
    else{
        computerScore++;
        return `${computerChoice} beats ${humanChoice}`;
    }
} 

/* Função Gerenciadora da Interface (Renomeada para não duplicar) */
function jogarRodada(escolhaDoHumano){
   
  if (humanScore === 3 || computerScore === 3) {
    return; 
  }

  gameSubtitle.style.display = 'none';

  const escolhaDoComputador = getComputerChoice();
  const resultadoDaRodada = playRound(escolhaDoHumano, escolhaDoComputador);

  roundExplanation.textContent = resultadoDaRodada;

  roundExplanation.style.backgroundColor = '#edf2f7';
  roundExplanation.style.padding = '8px 16px';
  roundExplanation.style.borderRadius = '20px';

  scoreBoard.textContent = `Placar: Humano ${humanScore} X ${computerScore} Computador`;
    
  if (humanScore === 3) {
    finalMessage.textContent = "🏆 Parabéns! Você venceu o jogo!";
    btnReset.style.display = 'block'; 
    gameSubtitle.style.display = 'block';
  } else if (computerScore === 3) {
      finalMessage.textContent = "🤖 Fim de jogo! O computador venceu!";
      btnReset.style.display = 'block';
      gameSubtitle.style.display = 'block';

  }
}

function resetarJogo(){
  
  humanScore = 0;
  computerScore = 0;
    
  roundExplanation.textContent = "";
  finalMessage.textContent = "";
    
  scoreBoard.textContent = "Placar: Humano 0 X 0 Computador";

  roundExplanation.style.backgroundColor = 'transparent';
  roundExplanation.style.padding = '0';
  
  gameSubtitle.style.display = 'block';

  btnReset.setAttribute('style', 'display: none;');
}

/* Eventos dos Botões chamando a função gerenciadora */
btnRock.addEventListener('click', () => jogarRodada('rock'));
btnPaper.addEventListener('click', () => jogarRodada('paper'));
btnScissors.addEventListener('click', () => jogarRodada('scissors'));

btnReset.addEventListener('click', resetarJogo);

Crie um jogo de pedra, papel e tesoura

O jogo será jogado contra o computador. Você escreverá uma função que retorna aleatoriamente "rock", "paper" ou "scissors".

Você não precisa se preocupar com a parte de front-end do jogo. Você apenas escreverá a lógica para o jogo. Abra script.js e comece a seguir as instruções.

Histórias de usuário:

    Você deve ter uma função chamada getComputerChoice.

    A função getComputerChoice deve retornar "rock", "paper" ou "scissors" aleatoriamente.

Dica: O método Math.random retorna um número aleatório que é maior ou igual a 0 e menor que 1. Pense em como você pode usar isso para retornar condicionalmente uma das múltiplas opções.

O jogo será jogado por um jogador humano. Você escreverá uma função que recebe a escolha do usuário e a retorna.

    Crie uma função chamada getHumanChoice.

    Escreva o código para que getHumanChoice retorne uma das escolhas válidas, dependendo da entrada do usuário.

Dica: Use o método prompt para obter a entrada do usuário.

O jogo acompanhará a pontuação do jogador. Você escreverá variáveis para acompanhar a pontuação do jogador.

    Crie duas variáveis chamadas humanScore e computerScore no escopo global.

    Inicialize essas variáveis com o valor de 0.

O jogo será jogado rodada por rodada. Você escreverá uma função que recebe as escolhas do jogador humano e do computador como argumentos, joga uma única rodada, incrementa a pontuação do vencedor da rodada e registra o anúncio do vencedor.

    Crie uma função chamada playRound.

    Defina dois parâmetros para playRound. Parâmetro um humanChoice e parâmetro dois computerChoice. Use esses dois parâmetros para receber as escolhas do humano e do computador como argumentos.

    Certifique-se de que o parâmetro humanChoice da função não faça a distinção entre maiúsculas e minúsculas para que os jogadores possam digitar "rock", "ROCK", "RocK" ou outras variações.

    Escreva o código para a função playRound, que retorna um valor de string representando o vencedor da rodada.

    Se for empate, ela deve retornar "It's a tie!".

    Se o jogador vencer, deve retornar "You win! [player choice] beats [computer choice]".

    Se o computador vencer, ele deve retornar "You lose! [computer choice] beats [player choice]".

    Incremente a variável humanScore ou computerScore com base no vencedor da rodada.

O jogo terá 3 rodadas. Você escreverá uma função chamada playGame que chama playRound para jogar 3 rodadas, mantém o controle das pontuações e declara um vencedor no final.

    Crie uma função chamada playGame.

    Crie um laço que é executado por 3 rodadas e chame a função playRound a cada vez, com as funções de escolha do humano e do computador como argumentos.

    No final do jogo, retorne o vencedor do jogo com base em quem ganhou mais rodadas.

    Se o jogador humano ganhar mais rodadas que o computador, retorne uma mensagem que diga "You win the game!".

    Se o computador ganhar mais rodadas que o jogador humano, retorne uma mensagem que diga "You lose the game!".

=============================================================================================================================

Build a Rock Paper Scissors Game

Your game will be played against the computer. You will write a function that randomly returns "rock", "paper" or "scissors".

You do not need to worry about the front-end part of the game. You will only write the logic for the game. Open the script.js and start following the instructions.

User stories:

    You should have a function named getComputerChoice.

    Your getComputerChoice function should return "rock", "paper", or "scissors" at random.

Hint: The Math.random method returns a random number that’s greater than or equal to 0 and less than 1. Think about how you can use this to conditionally return one of the multiple choices.

Your game will be played by a human player. You will write a function that takes the user's choice and returns it.

    Create a function named getHumanChoice.

    Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.

Hint: Use the prompt method to get the user’s input.

Your game will keep track of the player's score. You will write variables to keep track of the player's score.

    Create two new variables named humanScore and computerScore in the global scope.

    Initialize those variables with the value of 0.

Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

    Create a new function named playRound.

    Define two parameters for playRound. Parameter one humanChoice and parameter two computerChoice. Use these two parameters to take the human and computer choices as arguments.

    Make your function’s humanChoice parameter case-insensitive so that players can input "rock", "ROCK", "RocK", or other variations.

    Write the code for your playRound function that returns a string value representing the round winner.

    If it is a tie, it should return "It's a tie!".

    If the player wins, it should return "You win! [player choice] beats [computer choice]".

    If the computer wins, it should return "You lose! [computer choice] beats [player choice]".

    Increment the humanScore or computerScore variable based on the round winner.

Your game will play 3 rounds. You will write a function named playGame that calls playRound to play 3 rounds, keeps track of the scores, and declares a winner at the end.

    Create a new function named playGame.

    Create a loop that plays 3 rounds and calls the playRound function each time with the human's choice and the computer's choice functions as arguments.

    At the end of the game, return the winner of the game based on who won the most rounds.

    If the human player wins more rounds than the computer player, return a message that says "You win the game!".

    If the computer player wins more rounds than the human player, return a message that says "You lose the game!".


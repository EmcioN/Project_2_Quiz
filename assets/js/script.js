const playButton = document.querySelector('.button[aria-label="Play"]');
const endGameButton = document.querySelector('.button[aria-label="End game"]');
const playAgainButton = document.querySelector('.button[aria-label="Play again"]');
const homeButton = document.querySelector('.button[aria-label="Home"]');
const scoreButton = document.querySelector('.button[aria-label="Your Score"]');
const yourScoreButton = document.querySelector('.button[aria-label="Your Scores"]');
const mainSection = document.getElementById('main');
const gameSection = document.getElementById('game');
const endGameSection = document.getElementById('end-game');
const scoreSection = document.getElementById('scores');


playButton.addEventListener('click', () => {
    mainSection.style.display = 'none';
    gameSection.style.display = 'flex';
    startGame();
  });
endGameButton.addEventListener('click', () => {    
    gameSection.style.display = 'none';
    endGameSection.style.display = 'flex';
  });
playAgainButton.addEventListener('click', () => {    
    endGameSection.style.display = 'none';
    gameSection.style.display = 'flex';
    startGame();        
  });
scoreButton.addEventListener('click', () => {
    endGameSection.style.display = 'none';
    mainSection.style.display = 'none';
    gameSection.style.display = 'none';
    scoreSection.style.display = 'flex';
  });
yourScoreButton.addEventListener('click', () => {
    endGameSection.style.display = 'none';
    mainSection.style.display = 'none';
    gameSection.style.display = 'none';
    scoreSection.style.display = 'flex';
  });
homeButton.addEventListener('click', () => {    
    mainSection.style.display = 'flex';    
    scoreSection.style.display = 'none';
  });    



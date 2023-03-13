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
  });
endGameButton.addEventListener('click', () => {
    mainSection.style.display = 'none';
    gameSection.style.display = 'none';
    endGameSection.style.display = 'flex';
  });
playAgainButton.addEventListener('click', () => {
    endGameSection.style.display = 'none';
    mainSection.style.display = 'flex';
    gameSection.style.display = 'none';
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
    endGameSection.style.display = 'none';
    mainSection.style.display = 'flex';
    gameSection.style.display = 'none';
    scoreSection.style.display = 'none';
  });    

// Questions


let questions = [];

fetch(
  "https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple"
);


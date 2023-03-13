const playButton = document.querySelector('.button[aria-label="Play"]');
const endGameButton = document.querySelector('.button[aria-label="End game"]');
const playAgainButton = document.querySelector('.button[aria-label="Play again"]');
const mainSection = document.getElementById('main');
const gameSection = document.getElementById('game');
const endGameSection = document.getElementById('end-game');

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

// Questions


let questions = [];

fetch(
  "https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple"
);


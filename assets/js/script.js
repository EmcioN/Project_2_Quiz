const playButton = document.querySelector('.button[aria-label="Play"]');
const mainSection = document.getElementById('main');
const gameSection = document.getElementById('game');
const endGameSection = document.getElementById('end-game');

playButton.addEventListener('click', () => {
    mainSection.style.display = 'none';
    gameSection.style.display = 'block';
  });
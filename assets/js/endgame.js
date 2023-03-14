const username = document.getElementById('name');
const submitButton = document.querySelector('.button[type="submit"]');
const finalScore = document.getElementById('your-score');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const maxScores = 8;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
  submitButton.disabled = !username.value;
});  

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(8);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    finalScore.innerText = mostRecentScore;
    window.location.assign('/');    
};
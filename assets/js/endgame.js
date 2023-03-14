const username = document.getElementById('name');
const submitButton = document.querySelector('.button[type="submit"]');
const finalScore = document.getElementById('your-score');
const lastScore = localStorage.getItem('lastScore');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const maxScores = 8;
finalScore.innerText = lastScore;

username.addEventListener('keyup', () => {
  submitButton.disabled = !username.value;
});  

saveScore = (e) => {
    e.preventDefault();

    const score = {
        score: lastScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(8);
    localStorage.setItem('highScores', JSON.stringify(highScores));    
    window.location.assign('/');    
};
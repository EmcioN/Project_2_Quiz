/*jshint sub:true*/
/*jshint esversion: 6 */
const username = document.getElementById('name');
const submitButton = document.querySelector('.button[type="submit"]');
const finalScore = document.getElementById('your-score');
let lastScore = localStorage.getItem('lastScore');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
finalScore.innerText = lastScore;

username.addEventListener('keyup', () => {
  submitButton.disabled = !username.value;
});  

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    const score = {
        score: lastScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(8);
    localStorage.setItem('highScores', JSON.stringify(highScores));    
    window.location.assign('index.html');    
});
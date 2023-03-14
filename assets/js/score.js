/*jshint sub:true*/
/*jshint esversion: 6 */
const scoresList = document.getElementById("high-scores-list");

scoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");
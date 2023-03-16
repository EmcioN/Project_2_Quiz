/*jshint sub:true*/
/*jshint esversion: 6 */
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
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('answer-text'));
const choicesBox = Array.from(document.getElementsByClassName('answer-box'));
const questionNumber = document.getElementById('question-number');
const scoreNumber = document.getElementsByClassName('score');
const points = 10;
const maxQuestion = 10;
const username = document.getElementById('name');
const submitButton = document.querySelector('.button[type="submit"]');
const finalScore = document.getElementById('your-score');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const scoresList = document.getElementById("high-scores-list");

let lastScore = localStorage.getItem('lastScore');
let currentQuestion = {};
let takingAnswer = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

const startGame = () => {
  questionCounter = 0;    
  score = 0;              
  availableQuesions = [...questions];    
  getNewQuestion();    
};

const getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= maxQuestion) {
      localStorage.setItem('lastScore', score);
      lastScore = score;
      finalScore.innerText = score;        
      window.location.hash = ('#end-game');
      document.getElementById('end-game').style.display = 'flex';
      document.getElementById('game').style.display = 'none';
      return; 
  }
  questionCounter++;
  questionNumber.innerText = `Question ${questionCounter}/${maxQuestion}`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex]; 

  question.innerHTML = currentQuestion.question.replace(/(&#039;)|(&apos;)|(&quot;)|(&lt;)|(&gt;)/g, function(match) {
  switch(match) {
      case "&#039;":
      case "&apos;":
      return "'";
      case "&quot;":
      return '"';
      case "&lt;":
      return "<";
      case "&gt;":
      return ">";
      default:
      return match;
  }
});

  choices.forEach((choice) => {
      const number = choice.dataset['number'];
      choice.innerText = currentQuestion['choice' + number];
  });

  availableQuesions.splice(questionIndex, 1);
  takingAnswer = true;
};

finalScore.innerText = lastScore;


fetch(
    'https://opentdb.com/api.php?amount=10&category=15&type=multiple'
)
    .then((result) => {
        return result.json();
    })
    .then((loadedQuestions) => {
        questions = loadedQuestions.results.map((loadedQuestion) => {
            const changedQuestion = {
                question: loadedQuestion.question,
            };

            const answerChoices = [...loadedQuestion.incorrect_answers];
            changedQuestion.answer = Math.floor(Math.random() * 4) + 1;
            answerChoices.splice(
              changedQuestion.answer -1,0,
              loadedQuestion.correct_answer
            );

            answerChoices.forEach((choice, index) => {
              changedQuestion['choice' + (index + 1)] = choice;
            });

            return changedQuestion;
        });
        startGame();
    })
    .catch((err) => {
        console.error(err);
    });


choicesBox.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!takingAnswer) return;

        takingAnswer = false;
        const selectedChoice = e.currentTarget;
        const selectedAnswer = selectedChoice.querySelector('.answer-text').dataset['number'];

        const classToAdd =
            selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToAdd === 'correct') {
            incrementScore(points);
        }

        selectedChoice.classList.add(classToAdd);

        setTimeout(() => {
            selectedChoice.classList.remove(classToAdd);
            getNewQuestion();
        }, 1000);
    });
});


incrementScore = (num) => {
    score += num;
    scoreNumber[0].innerText = score;
};

scoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");

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

playButton.addEventListener('click', () => {
    mainSection.style.display = 'none';
    gameSection.style.display = 'flex';
    startGame();
  });
endGameButton.addEventListener('click', () => {    
    gameSection.style.display = 'none';
    endGameSection.style.display = 'flex';    
    startGame();
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
    startGame();
  });  
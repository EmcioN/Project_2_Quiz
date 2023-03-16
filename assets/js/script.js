/*jshint sub:true*/
/*jshint esversion: 6 */
const playButtonRef = document.querySelector('.button[aria-label="Play"]');
const endGameButtonRef = document.querySelector('.button[aria-label="End game"]');
const playAgainButtonRef = document.querySelector('.button[aria-label="Play again"]');
const homeButtonRef = document.querySelector('.button[aria-label="Home"]');
const scoreButtonRef = document.querySelector('.button[aria-label="Your Score"]');
const yourScoreButtonRef = document.querySelector('.button[aria-label="Your Scores"]');
const mainSectionRef = document.querySelector('#main');
const gameSectionRef = document.querySelector('#game');
const endGameSectionRef = document.querySelector('#end-game');
const scoreSectionRef = document.querySelector('#scores');
const question = document.querySelector('#question');
const username = document.querySelector('#name');
const finalScore = document.querySelector('#your-score');
const scoresList = document.querySelector("#high-scores-list");
const questionNumber = document.querySelector('#question-number');
const submitButton = document.querySelector('.button[type="submit"]');
const scoreNumber = document.querySelectorAll('.score');
const choices = Array.from(document.querySelectorAll('.answer-text'));
const choicesBox = Array.from(document.querySelectorAll('.answer-box'));
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const points = 10;
const maxQuestion = 10;

let lastScore = localStorage.getItem('lastScore');
let currentQuestion = {};
let takingAnswer = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

/**
 * Reset question counter and score then load new question.
 */
const startGame = () => {
  questionCounter = 0;    
  score = 0;              
  availableQuesions = [...questions];    
  getNewQuestion();    
};

/**
 * Load new question with answers for the user
 */
const getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= maxQuestion) {      
      lastScore = score;
      finalScore.innerText = score;        
      window.location.hash = ('#end-game');
      endGameSectionRef.style.display = 'flex';
      gameSectionRef.style.display = 'none';
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

/**
 * Increment user score after correct answer
 */
const incrementScore = (num) => {
  score += num;
  scoreNumber[0].innerText = score;
  localStorage.setItem('lastScore', score);
};

/**
 * Fetch questions from opentdb api
 */
const fetchQuestion = () => {
  fetch(
    'https://opentdb.com/api.php?amount=10&category=15&type=multiple'
  )
    .then((result) => result.json())

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
    .catch((err) => console.error(err));   
  }

fetchQuestion();

// Checks if the answers are correct and adds the appropriate class

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

finalScore.innerText = lastScore;

scoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");

username.addEventListener('keyup', () => {
  submitButton.disabled = !username.value;
});  

// Save user name on scoreboard

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

playButtonRef.addEventListener('click', () => {
    mainSectionRef.style.display = 'none';
    gameSectionRef.style.display = 'flex';
    startGame();
  });
endGameButtonRef.addEventListener('click', () => {    
    gameSectionRef.style.display = 'none';
    endGameSectionRef.style.display = 'flex';
    localStorage.removeItem('lastScore');        
    startGame();    
  });
playAgainButtonRef.addEventListener('click', () => {    
    endGameSectionRef.style.display = 'none';
    gameSectionRef.style.display = 'flex';
    localStorage.removeItem('lastScore');    
    startGame();            
  });
scoreButtonRef.addEventListener('click', () => {
    endGameSectionRef.style.display = 'none';
    mainSectionRef.style.display = 'none';
    gameSectionRef.style.display = 'none';
    scoreSectionRef.style.display = 'flex';
  });
yourScoreButtonRef.addEventListener('click', () => {
    endGameSectionRef.style.display = 'none';
    mainSectionRef.style.display = 'none';
    gameSectionRef.style.display = 'none';
    scoreSectionRef.style.display = 'flex';
  });
homeButtonRef.addEventListener('click', () => {    
    mainSectionRef.style.display = 'flex';    
    scoreSectionRef.style.display = 'none';
    localStorage.removeItem('lastScore');    
    startGame();    
  });  
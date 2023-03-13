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
    gameSection.style.display = 'none';
    endGameSection.style.display = 'flex';
  });
playAgainButton.addEventListener('click', () => {
    endGameSection.style.display = 'none';
    mainSection.style.display = 'flex';    
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

// Questions


const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('answer-text'));
const questionNumber = document.getElementById('question-number');
const scoreText = document.getElementsByClassName('score');
let currentQuestion = {};
let takingAnswer = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [];

fetch(
    'https://opentdb.com/api.php?amount=10&category=15&type=multiple'
)
    .then((res) => {
        return res.json();
    })
    .then((loadedQuestions) => {
        questions = loadedQuestions.results.map((loadedQuestion) => {
            const changedQuestion = {
                question: loadedQuestion.question,
            };

            const answerChoices = [...loadedQuestion.incorrect_answers];
            changedQuestion.answer = Math.floor(Math.random() * 4) + 1;
            answerChoices.splice(
              changedQuestion.answer - 1,
                0,
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

const correctPoint = 10;
const maxQuestion = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= maxQuestion) {
        localStorage.setItem('mostRecentScore', score);        
        return window.location.hash = ('#end-game');
    }
    questionCounter++;
    questionNumber.innerText = `Question ${questionCounter}/${maxQuestion}`;
    
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    takingAnswer = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!takingAnswer) return;

        takingAnswer = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply =
            selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(correctPoint);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

incrementScore = (num) => {
    score += num;
    scoreText.innerText = score;
};
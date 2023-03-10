/*jshint sub:true*/
/*jshint esversion: 6 */
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('answer-text'));
const questionNumber = document.getElementById('question-number');
const scoreNumber = document.getElementsByClassName('score');
let currentQuestion = {};
let takingAnswer = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];
const points = 10;
const maxQuestion = 10;


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



startGame = () => {
    questionCounter = 0;
    score = 0;          
    availableQuesions = [...questions];    
    getNewQuestion();    
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= maxQuestion) {
        localStorage.setItem('lastScore', score);        
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

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!takingAnswer) return;

        takingAnswer = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToAdd =
            selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToAdd === 'correct') {
            incrementScore(points);
        }

        selectedChoice.parentElement.classList.add(classToAdd);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToAdd);
            getNewQuestion();
        }, 1000);
    });
});

incrementScore = (num) => {
    score += num;
    scoreNumber[0].innerText = score;
};
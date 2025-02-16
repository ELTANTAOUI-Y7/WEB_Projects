const quizData = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["<js>", "<javascript>", "<script>", "<scripting>"],
        correctAnswer: "<script>"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        options: ["The <body> Section", "Both the <head> section and the <body> section ", " the <head> section", "The <footer> section"],
        correctAnswer: "The <body> Section"
    },
    {
        question: "What will be the output of this code?  console.log(typeof typeof 1) ; ",
        options: ["string", "1", "number", "True"],
        correctAnswer: "string"
    },
    {
        question: "What is the correct syntax for referring to an external script called xxx.js?",
        options: ["<script src= xxx.js>", "None of the answers", "<script>", "<script href= xxx.js>"],
        correctAnswer: "None of the answers"
    }
];

let currentQuestion = 0;
let score = 0;
let currentSelectedAnswer = null;
let timerInterval;

const next = document.querySelector(".next");
const start_btn = document.querySelector(".start-btn");
const start = document.querySelector(".start");
const timerEl = document.querySelector(".time");
let timeLeft = 60;
let finish = false;

// Lancement du quiz dès qu'on clique sur Start
start_btn.addEventListener("click", () => {
    start.style.display = "none";
    document.querySelector(".upper-bar").style.display = "flex";
    next.style.display = "block";
    afficherQuestion();
    startTimer();
});

// Passage à la question suivante lors du clic sur "Next"
next.addEventListener("click", function(event) {
    event.preventDefault();
    clearInterval(timerInterval);
    nextQuestion();
});

// Fonction appelée pour valider la réponse et afficher la question suivante
function nextQuestion(){
    if (currentSelectedAnswer && currentSelectedAnswer.textContent === quizData[currentQuestion].correctAnswer) {
        score++;
    }
    currentQuestion++;
    currentSelectedAnswer = null;
    if (currentQuestion < quizData.length) {
        afficherQuestion();
        startTimer();
    } else {
        afficherQuestion();
    }
}

function afficherQuestion() {
    if (currentQuestion < quizData.length) {
        clearInterval(timerInterval);
        const answerElems = document.querySelectorAll(".options .ans");
        // Réinitialiser le style sur toutes les options
        answerElems.forEach((ans) => {
            ans.style.backgroundColor = "rgb(238, 238, 238)";
        });

        const quiz = quizData[currentQuestion];
        const questionElem = document.querySelector(".qst");
        questionElem.innerText = quiz.question;

        for (let i = 0; i < answerElems.length; i++) {
            answerElems[i].innerText = quiz.options[i];
            answerElems[i].style.display = "flex";
        }

        const qst_number = document.querySelector(".qst-num");
        qst_number.innerText = "Question " + (currentQuestion + 1) + " of " + quizData.length;
    } else {
        // Fin du quiz, afficher le score
        const last_page = document.querySelector(".last-page");
        last_page.style.display = "block";
        const score_page = document.querySelector(".score_page");
        score_page.style.display = "block";
        score_page.innerText = "Your score: " + score + "/" + quizData.length;
        const container = document.querySelector(".container");
        const upper_bar = document.querySelector(".upper-bar");
        upper_bar.style.display = "none";
        const form = document.querySelector(".form");
        form.style.display = "none";
    }
}

// Permet à l'utilisateur de sélectionner une option unique et de modifier son choix
function checkAnswer(){
    document.querySelectorAll(".ans").forEach((ans) => {
        ans.addEventListener("click", function() {
            if (currentSelectedAnswer) {
                currentSelectedAnswer.style.backgroundColor = "rgb(238, 238, 238)";
            }
            currentSelectedAnswer = ans;
            ans.style.backgroundColor = "rgb(104, 205, 221)";
        });
    });
}
checkAnswer();

function startTimer() {
    timeLeft = 10;
    timerEl.textContent = "Time left : " + timeLeft + " s";
    timerInterval = setInterval(() => {
        timeLeft--;
        timerEl.textContent = "Time leaft : " + timeLeft + " s";
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            finish = true;
            nextQuestion();
        }
    }, 1000);
}
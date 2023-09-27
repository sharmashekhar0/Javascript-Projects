
const score = document.querySelector("#score");
const question = document.querySelector("#question");
const answer = document.querySelector("#answer");
const submitBtn = document.querySelector("#submit-btn");

let a;
let b;

askQuestion(a, b);

let scoreValue = 0;

submitBtn.addEventListener("click", () => {

    if(a * b === parseInt(answer.value)) {
        scoreValue++;
    }
    else {
        scoreValue--;
    }
    score.innerText = `Score: ${scoreValue}`;
    askQuestion();
    answer.value = "";
});

function getRandomNumber() {
    return Math.ceil(Math.random() * 10);
};

function askQuestion() {
    a = getRandomNumber();
    b = getRandomNumber();
    question.innerText = `What is ${a} multiply by ${b}`;
}
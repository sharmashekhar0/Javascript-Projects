const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");

const message = document.querySelector(".message");
const yourScore = document.querySelector(".your-score");
const computerScore = document.querySelector(".computer-score");

let yourScoreValue = 0;
let computerScoreValue = 0;

rock.addEventListener("click", () => {
	const compChoice = Math.ceil(Math.random() * 3);
	console.log("Number = ", compChoice);

	if (compChoice === 1) {
		message.textContent = "It's a Tie";
	} else if (compChoice === 2) {
		message.textContent = "You Lose! Paper beats Rock";
		computerScoreValue++;
		computerScore.textContent = computerScoreValue;
	} else {
		message.textContent = "You Win! Rock beats Scissor";
		yourScoreValue++;
		yourScore.textContent = yourScoreValue;
	}
	message.classList.remove("hide");
});

paper.addEventListener("click", () => {
	const compChoice = Math.ceil(Math.random() * 3);
	console.log("Number = ", compChoice);

	if (compChoice === 2) {
		message.textContent = "It's a Tie";
	} else if (compChoice === 1) {
		message.textContent = "You Win! Paper beats Rock";
		yourScoreValue++;
		yourScore.textContent = yourScoreValue;
	} else {
		message.textContent = "You Lose! Scissor beats Paper";
		computerScoreValue++;
		computerScore.textContent = computerScoreValue;
	}
	message.classList.remove("hide");
});

scissor.addEventListener("click", () => {
	const compChoice = Math.ceil(Math.random() * 3);

	if (compChoice === 3) {
		message.textContent = "It's a Tie";
	} else if (compChoice === 1) {
		message.textContent = "You Lose! Rock beats Scissor";
		computerScoreValue++;
		computerScore.textContent = computerScoreValue;
	} else {
		message.textContent = "You Win! Scissor beats Paper";
		yourScoreValue++;
		yourScore.textContent = yourScoreValue;
	}
	message.classList.remove("hide");
});

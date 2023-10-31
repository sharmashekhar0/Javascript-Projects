const feedbackEl = document.querySelectorAll(".feedback");
const sendReviewBtnEl = document.querySelector(".btn");
const feedbackContainerEL = document.querySelector(".feedback-container");

let selectedFeedback = "";

feedbackEl.forEach((optionSelected) => {
	optionSelected.addEventListener("click", () => {
		removeSelected();
		optionSelected.classList.add("selected");

		selectedFeedback = optionSelected.children[1].textContent;

		sendReviewBtnEl.addEventListener("click", () => {
			feedbackContainerEL.classList.add("review");
			feedbackContainerEL.innerHTML = `
			<p><strong>Thank You!</strong></p>
			<p>Feedback: <strong>${selectedFeedback}</strong></p>
			<p>We'll use your feedback to improve our customer support.</p>`;
		});
		console.log("Option ", optionSelected.children);
	});
});

function removeSelected() {
	feedbackEl.forEach((element) => {
		element.classList.remove("selected");
	});
}

const noteCollectionEl = document.querySelector(".note-collection");
const plusBtnEl = document.querySelector(".plus-btn");

plusBtnEl.addEventListener("click", () => {
	let child = document.createElement("textarea");

	child.classList.add("note");
	child.cols = "40";
	child.rows = "10";

	child.placeholder = "Empty Note";
	
	noteCollectionEl.appendChild(child);
});
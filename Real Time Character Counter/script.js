const textAreaEl = document.querySelector(".textarea");
const totalEl = document.querySelector(".total");
const remainingEl = document.querySelector(".remaining");

const maxCharLimit = 150;

textAreaEl.addEventListener("input", () => {
	const str = textAreaEl.value;
	totalEl.textContent = `Total Character: ${str.length}`;
	remainingEl.textContent = `Remaining: ${150 - str.length}`;
});

textAreaEl.addEventListener("keypress", function (event) {
	str = textAreaEl.value;
	if (str.length >= 150) {
		event.preventDefault();
	}
});

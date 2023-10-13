const outputEl = document.querySelector(".output");
const incrementBtn = document.querySelector(".increment-btn");
const decrementBtn = document.querySelector(".decrement-btn");
const resetBtn = document.querySelector(".reset-btn");

let outputValue = 0;

function checkValue() {
	if (outputValue < 0) {
		outputEl.classList.add("red");
	}
	if (outputValue > 0) {
		outputEl.classList.remove("red");
	}
}

incrementBtn.addEventListener("click", () => {
	outputValue++;
	outputEl.textContent = outputValue;
	checkValue();
});
decrementBtn.addEventListener("click", () => {
	outputValue--;
	outputEl.textContent = outputValue;
	checkValue();
});
resetBtn.addEventListener("click", () => {
	outputValue = 0;
	outputEl.textContent = outputValue;
});

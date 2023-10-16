const cardCollectionEl = document.querySelectorAll(".card");
const colorNameEl = document.querySelectorAll(".color-name");

for (let i = 0; i < cardCollectionEl.length; i++) {
	let colorCode = randomColorGenerator();
	colorNameEl[i].textContent = colorCode;
	cardCollectionEl[i].style.backgroundColor = `${colorCode}`;
}

function randomColorGenerator() {
	const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
	let colorCode = "#";

	for (let i = 0; i < 6; i++) {
		let index = Math.floor(Math.random() * 15);
		colorCode += arr[index];
	}

	return colorCode;
}

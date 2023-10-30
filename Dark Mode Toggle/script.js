const containerEl = document.querySelector(".container");
const circleEl = document.querySelector(".circle");
const bodyEl = document.querySelector("body");

let lightMode = true;

containerEl.addEventListener("click", () => {
	if (lightMode === true) {
		circleEl.classList.remove("lightMode");
		circleEl.classList.add("darkMode");
		lightMode = false;
	} else {
		circleEl.classList.remove("darkMode");
		circleEl.classList.add("lightMode");
		lightMode = true;
	}
	containerEl.classList.toggle("containerDark");
	circleEl.classList.toggle("circleDark");
	bodyEl.classList.toggle("bodyDark");
	console.log("Mode = ", lightMode);
});

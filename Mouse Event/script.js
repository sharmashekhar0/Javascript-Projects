const xOutput = document.querySelector(".x-output");
const yOutput = document.querySelector(".y-output");

window.addEventListener("mousemove", (event) => {
	xOutput.textContent = event.pageX;
	yOutput.textContent = event.pageY;
});

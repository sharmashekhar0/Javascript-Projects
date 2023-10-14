const imgContainerEl = document.querySelector(".img-container");
const imgEl = document.querySelectorAll("img");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

let timeout;

let currentImg = 1;

rightBtn.addEventListener("click", () => {
	currentImg++;
	clearTimeout(timeout);
	updateImg();
});

leftBtn.addEventListener("click", () => {
	currentImg--;
	clearTimeout(timeout);
	updateImg();
});

updateImg();

function updateImg() {
	console.log("Current Image: ", currentImg);
	if (currentImg > imgEl.length) {
		currentImg = 1;
	} else if (currentImg < 1) {
		currentImg = imgEl.length;
	}

	imgContainerEl.style.transform = `translateX(-${(currentImg - 1) * 40}vw)`;

	timeout = setTimeout(() => {
		currentImg++;
		updateImg();
	}, 3000);
}

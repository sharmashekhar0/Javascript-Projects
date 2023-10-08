const loadingPercentage = document.querySelector(".loading-percentage");
const loadingBarFront = document.querySelector(".loading-bar-front");

let i = 0;
const id = setInterval(() => {
	i++;
	loadingPercentage.textContent = `${i}%`;
	loadingBarFront.style.width = `${i}%`;
	if (i === 100) clearInterval(id);
}, 20);

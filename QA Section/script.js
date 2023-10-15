const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const hiddenDiv = document.querySelectorAll(".hidden");

btn1.addEventListener("click", () => {
	hiddenDiv[0].classList.toggle("hidden");
});

btn2.addEventListener("click", () => {
	hiddenDiv[1].classList.toggle("hidden");
});

btn3.addEventListener("click", () => {
	hiddenDiv[2].classList.toggle("hidden");
});

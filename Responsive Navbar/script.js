const menuBtn = document.querySelector("#menu");
const list = document.querySelector(".list");
const listItems = document.querySelectorAll(".list-item");

menuBtn.addEventListener("click", () => {
	list.classList.toggle("show");
});

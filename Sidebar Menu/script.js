const sidebar = document.querySelector(".sidebar");
const xmark = document.querySelector(".xmark");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
	sidebar.classList.toggle("show-sidebar");
});

xmark.addEventListener("click", () => {
	sidebar.classList.remove("show-sidebar");
});

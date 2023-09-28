const menu = document.querySelector(".menu");
const menuPara = document.querySelector(".menu p");
const socialList = document.querySelector(".social-lists");
const socialListItems = document.querySelectorAll(".social-lists li");

menu.addEventListener("click", () => {

    socialList.classList.toggle("hide");
    menu.classList.toggle("rotate");

});

socialListItems.forEach((listItem) => {
    
    listItem.addEventListener("click", () => {
        menuPara.innerHTML = listItem.innerHTML;
        menu.classList.toggle("rotate");
        socialList.classList.add("hide");
    });

});
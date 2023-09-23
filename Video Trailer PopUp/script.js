
const mainContainer = document.querySelector("#main-container");
const watchBtn = document.querySelector("#watch-btn");
const videoPlayer = document.querySelector("#video-player");
const xMark = document.querySelector("#x-mark");
const video = document.querySelector(".video-player");


watchBtn.addEventListener("click", function() {
    mainContainer.style.visibility = "hidden";
    videoPlayer.style.visibility = "visible";
});

xMark.addEventListener("click", function() {
    mainContainer.style.visibility = "visible";
    videoPlayer.style.visibility = "hidden";
    video.pause();
    video.currentTime = 0;
});
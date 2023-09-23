const step1 = document.querySelector("#step1");
const step2 = document.querySelector("#step2");
const step3 = document.querySelector("#step3");

step1.classList.add("active");
step2.classList.add("hover-effect");
step3.classList.add("hover-effect");

step1.addEventListener('click', () => {
    step1.classList.remove("hover-effect");
    step1.classList.add("active");
    step2.classList.remove("active");
    step3.classList.remove("active");
    step2.classList.add("hover-effect");
    step3.classList.add("hover-effect");
    const heading = document.querySelector("#heading");
    heading.innerText = "Step 1";
});

step2.addEventListener('click', () => {
    step2.classList.remove("hover-effect");
    step2.classList.add("active");
    step1.classList.remove("active");
    step3.classList.remove("active");
    step1.classList.add("hover-effect");
    step3.classList.add("hover-effect");
    const heading = document.querySelector("#heading");
    heading.innerText = "Step 2";
});

step3.addEventListener('click', () => {
    step3.classList.remove("hover-effect");
    step3.classList.add("active");
    step1.classList.remove("active");
    step2.classList.remove("active");
    step1.classList.add("hover-effect");
    step2.classList.add("hover-effect");
    const heading = document.querySelector("#heading");
    heading.innerText = "Step 3";
});

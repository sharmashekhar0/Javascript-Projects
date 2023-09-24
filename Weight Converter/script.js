
const pounds = document.querySelector("#weight-pound");
const outputWeight = document.querySelector("#output-weight");
const warning = document.querySelector("#warning");

let warningTime;
let resultTime;

pounds.addEventListener("input", () => {

    const value = pounds.value;
    if(value <= 0) {
        warning.style.display = "inline";
        clearTimeout(warningTime);
        warningTime = setTimeout(() => {
            pounds.value = "";
            warning.style.display = "none";
        }, 2000);
    }
    else {
        warning.style.display = "none";
        const result = value *  0.453592;
        outputWeight.innerText = `Your weight in kg is: ${result.toFixed(2)}`;

        clearTimeout(resultTime);
        resultTime = setTimeout(() => {
            outputWeight.innerText = `Your weight in kg is:`;
            pounds.value = "";
        }, 10000);

    }

});

const celsius = document.querySelector("#celsius");
const fahrenheit = document.querySelector("#fahrenheit");
const kelvin = document.querySelector("#kelvin");

let c, f, k;

celsius.addEventListener("change", () => {
    c = parseFloat(celsius.value);
    f = ((c * 9)/5) + 32;
    k = c + 273.15;
    fahrenheit.value = f.toFixed(2);
    kelvin.value = k.toFixed(2);
});

fahrenheit.addEventListener("change", () => {
    f= parseFloat(fahrenheit.value);
    c= ((f - 32) * 5) / 9;
    k = ((f - 32) * 5) / 9 + 273.15;
    celsius.value = c.toFixed(2);
    kelvin.value = k.toFixed(2);
});

kelvin.addEventListener("change", () => {
    k = parseFloat(kelvin.value);
    c = k - 273.15;
    f =  ((c * 9)/5) + 32;
    fahrenheit.value = f.toFixed(2);
    celsius.value = c.toFixed(2);
});
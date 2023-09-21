
const billAmount = document.querySelector("#bill-amount");
const tipPercentage = document.querySelector("#tip-percentage");
const totalAmount = document.querySelector("#total-amount");
const calculateBtn = document.querySelector("#calculate-btn");

calculateBtn.addEventListener("click", function() {
    const bill = billAmount.value;
    const percent = tipPercentage.value;
    
    const amount = bill * (1 + percent / 100);
    totalAmount.innerText = "Total: " + amount.toFixed(2);
    
});

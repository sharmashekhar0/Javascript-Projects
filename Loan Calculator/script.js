const loanAmountEl = document.querySelector("#loan-amount");
const interestRateEl = document.querySelector("#interest-rate");
const monthToPayEl = document.querySelector("#time");
const calculateBtn = document.querySelector("#calculate");
const monthlyPaymentEl = document.querySelector(".monthly-payment");

calculateBtn.addEventListener("click", () => {
	const loanAmount = loanAmountEl.value;
	const interestRate = interestRateEl.value;
	const time = monthToPayEl.value;
	const monthlyPaymentAmount = (loanAmount * (1 + interestRate / 100)) / time;
	monthlyPaymentEl.textContent = `Monthly Payment: ₹${monthlyPaymentAmount.toFixed(
		2
	)}`;
	console.log(monthlyPaymentAmount);
});

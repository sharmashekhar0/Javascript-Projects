const quoteEl = document.querySelector(".quote");
const authorEl = document.querySelector(".author");
const getQuoteBtn = document.querySelector(".get-quote-btn");

const apiUrl = "https://api.quotable.io/random";

async function getQuote() {
	try {
		getQuoteBtn.textContent = "Loading...";
		getQuoteBtn.disabled = true;
		quoteEl.textContent = `Updating...`;
		authorEl.textContent = `Updating...`;
		const response = await fetch(apiUrl);
		const data = await response.json();
		console.log(data);
		const quote = data.content;
		const author = data.author;
		quoteEl.textContent = `${quote}`;
		authorEl.textContent = `~${author}`;
		getQuoteBtn.textContent = "Get a Quote";
		getQuoteBtn.disabled = false;
	} catch (error) {
		console.log(error);
		quoteEl.textContent = "An Error Happened, Try Again Later";
		authorEl.textContent = "An Error Happened";
		getQuoteBtn.textContent = "Get a Quote";
		getQuoteBtn.disabled = false;
	}
}

getQuote();

getQuoteBtn.addEventListener("click", getQuote);

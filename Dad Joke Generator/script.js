const jokeEL = document.querySelector(".joke");
const getJokeBtn = document.querySelector(".get-joke-btn");

const apiKey = "4kqGcJx8uDXo3XIskcbzokAz7rN8nWJs3PL9Mcll";

const options = {
	method: "GET",
	headers: {
		"X-Api-Key": apiKey,
	},
};

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
	try {
		getJokeBtn.textContent = "Loading...";
		getJokeBtn.disabled = true;
		jokeEL.textContent = `Updating...`;
		const response = await fetch(apiUrl, options);
		const data = await response.json();
		console.log(data);
		const joke = data[0].joke;
		jokeEL.textContent = `${joke}`;
		getJokeBtn.textContent = "Tell me a joke";
		getJokeBtn.disabled = false;
	} catch (error) {
		console.log(error);
		jokeEl.textContent = "An Error Happened, Try Again Later";
		getJokeBtn.textContent = "Tell me a joke";
		getJokeBtn.disabled = false;
	}
}

getJoke();

getJokeBtn.addEventListener("click", getJoke);

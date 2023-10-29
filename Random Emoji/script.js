const emojiBoxEl = document.querySelector(".emoji-box");
const emojiEl = document.querySelector(".emoji");
const emojiNameEL = document.querySelector(".emoji-name");

const emoji = [];

async function getEmoji() {
	try {
		const apiUrl =
			"https://emoji-api.com/emojis?access_key=773b58f681fb786fafdb8392e8b8a75ddc177fd1";
		const response = await fetch(apiUrl);
		const data = await response.json();
		console.log(data);

		for (let i = 0; i < 1500; i++) {
			emoji.push({
				emojiName: data[i].character,
				emojiCode: data[i].unicodeName,
			});
		}
	} catch (error) {
		console.log(error);
	}
}

getEmoji();

emojiBoxEl.addEventListener("click", () => {
	const index = Math.floor(Math.random() * emoji.length);
	emojiEl.innerHTML = emoji[index].emojiName;
	emojiNameEL.textContent = emoji[index].emojiCode;
});

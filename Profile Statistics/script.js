const numberEl = document.querySelectorAll(".number");

function onStart() {
	let first = 0,
		second = 0,
		third = 0;
	const timer = setInterval(() => {
		if (first <= 15) {
			numberEl[0].textContent = first;
			first++;
		}
		if (second <= 260) {
			numberEl[1].textContent = second;
			second++;
		} else {
			clearInterval(timer);
		}
		if (third <= 27) {
			numberEl[2].textContent = third;
			third++;
		}
		console.log("second ", second);
	}, 1);
}

onStart();

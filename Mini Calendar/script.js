function getMonthString(month) {
	switch (month) {
		case 0:
			return "January";
			break;
		case 1:
			return "February";
			break;
		case 2:
			return "March";
			break;
		case 3:
			return "April";
			break;
		case 4:
			return "May";
			break;
		case 5:
			return "June";
			break;
		case 6:
			return "July";
			break;
		case 7:
			return "August";
			break;
		case 8:
			return "September";
			break;
		case 9:
			return "October";
			break;
		case 10:
			return "November";
			break;
		case 11:
			return "December";
			break;
		default:
			return "Month";
	}
}

function getDayString(day) {
	switch (day) {
		case 0:
			return "Sunday";
			break;
		case 1:
			return "Monday";
			break;
		case 2:
			return "Tuesday";
			break;
		case 3:
			return "Wednesday";
			break;
		case 4:
			return "Thursday";
			break;
		case 5:
			return "Friday";
			break;
		case 6:
			return "Saturday";
			break;
		default:
			return "Day";
	}
}

const monthEl = document.querySelector(".month");
const dayEl = document.querySelector(".day");
const dateEl = document.querySelector(".date");
const yearEl = document.querySelector(".year");

const month = new Date().getMonth();
const day = new Date().getDay();
const date = new Date().getDate();
const year = new Date().getFullYear();

monthEl.textContent = getMonthString(month);
dayEl.textContent = getDayString(day);
dateEl.textContent = date;
yearEl.textContent = year;

console.log("Month ", month);
console.log("day ", day);
console.log("date ", date);
console.log("year ", year);

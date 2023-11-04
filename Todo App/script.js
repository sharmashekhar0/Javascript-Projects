const containerEl = document.querySelector(".container");
const inputEl = document.querySelector(".input");

getTask().forEach((task) => {
	const taskEl = createTaskEl(task.id, task.content);
	containerEl.appendChild(taskEl);
});

function createTaskEl(id, content) {
	let taskEl = document.createElement("div");

	taskEl.innerHTML = `
	<div class="task-box">
	<p class="task">${content}</p>
		<div>
			<i class="fa-solid fa-square-check check-btn"></i>
			<i class="fa-solid fa-trash delete-btn"></i>
		</div>
	</div>
	`;

	const checkBtn = taskEl.querySelector(".check-btn");
	const deleteBtn = taskEl.querySelector(".delete-btn");
	const taskContent = taskEl.querySelector(".task");

	deleteBtn.addEventListener("click", () => {
		deleteTask(id, taskEl);
	});

	checkBtn.addEventListener("click", () => {
		taskContent.classList.toggle("checked");
	});

	return taskEl;
}

function deleteTask(id, taskEl) {
	const taskCollection = getTask().filter((task) => task.id != id);
	saveTask(taskCollection);
	containerEl.removeChild(taskEl);
}

function addTask(content) {
	const taskCollection = getTask();

	const taskObj = {
		id: Math.floor(Math.random() * 10000),
		content: `${content}`,
	};

	const taskEl = createTaskEl(taskObj.id, taskObj.content);

	containerEl.appendChild(taskEl);
	taskCollection.push(taskObj);
	saveTask(taskCollection);
}

function saveTask(taskCollection) {
	localStorage.setItem("todo-app", JSON.stringify(taskCollection));
}

function getTask() {
	console.log(JSON.parse(localStorage.getItem("todo-app") || "[]"));
	return JSON.parse(localStorage.getItem("todo-app") || "[]");
}

containerEl.addEventListener("submit", (event) => {
	event.preventDefault();
	const content = inputEl.value;
	inputEl.value = "";
	addTask(content);
});

const noteCollectionEl = document.querySelector(".note-collection");
const plusBtnEl = document.querySelector(".plus-btn");

getNotes().forEach((note) => {
	const noteEl = createNoteEl(note.id, note.content);
	noteCollectionEl.appendChild(noteEl);
});

function createNoteEl(id, content) {
	const element = document.createElement("textarea");
	element.cols = "40";
	element.rows = "10";
	element.placeholder = "Empty Note";
	element.classList.add("note");
	element.value = content;

	element.addEventListener("input", () => {
		updateNote(id, element.value);
	});

	element.addEventListener("dblclick", () => {
		const warning = confirm("Do you want to delete this note?");
		if (warning) {
			deleteNote(id, element);
		}
	});

	return element;
}

function deleteNote(id, element) {
	const noteCollection = getNotes().filter((note) => note.id != id);
	saveNote(noteCollection);
	noteCollectionEl.removeChild(element);
}

function addNote() {
	const noteCollection = getNotes();

	const noteObj = {
		id: Math.floor(Math.random() * 10000),
		content: "",
	};

	const noteEl = createNoteEl(noteObj.id, noteObj.content);

	noteCollectionEl.appendChild(noteEl);

	noteCollection.push(noteObj);

	saveNote(noteCollection);
}

function updateNote(id, content) {
	const noteCollection = getNotes();
	const target = noteCollection.filter((note) => note.id == id)[0];
	target.content = content;
	saveNote(noteCollection);
}

function saveNote(noteCollection) {
	localStorage.setItem("note-app", JSON.stringify(noteCollection));
}

function getNotes() {
	console.log(JSON.parse(localStorage.getItem("note-app") || "[]"));
	return JSON.parse(localStorage.getItem("note-app") || "[]");
}

plusBtnEl.addEventListener("click", addNote);

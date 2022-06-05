/* Register Confirmation */

const form = document.getElementById("form");
form.addEventListener("submit", e => {
	e.preventDefault();

	let content = document.getElementById("form__message");
	let registering = `<span>Cadastrando...</span>`;
	let confirmation = `<span>Cadastrado com sucesso!</span>`;

	cleanField();

	content.innerHTML = registering;
	setTimeout(() => {
		content.innerHTML = confirmation;
	}, 1000);
});

/* Cleaning All Fields from Form */

function cleanField() {
	document.querySelector("#name").value = "";
	document.querySelector("#email").value = "";
	document.querySelector("#description").value = "";
	document.querySelector("#modules__kenzie").value = "";
	document.querySelector("#password").value = "";
	document.querySelector("#confirm__password").value = "";
	document.querySelector(
		'input[name = "radio__options"]:checked'
	).checked = false;
}

/* Saving Data from Form to the localStorage */

function saveDataParticipant() {
	//  Getting Data from Form
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const descriptionBox = document.getElementById("description").value;
	const selectModule = document.getElementById("modules__kenzie").value;
	const password = document.getElementById("password").value;
	const confirmPassword = document.getElementById("confirm__password").value;
	const sendNewsletter = document.querySelector(
		'input[name = "radio__options"]:checked'
	).value;

	// Showing Ddata on Console
	console.log(
		name +
			"\n" +
			email +
			"\n" +
			descriptionBox +
			"\n" +
			selectModule +
			"\n" +
			password +
			"\n" +
			confirmPassword +
			"\n" +
			sendNewsletter
	);

	// Grouping Data in an Object
	const participantData = {
		name,
		email,
		descriptionBox,
		selectModule,
		password,
		confirmPassword,
		sendNewsletter
	};

	// Storing Data on LocalStorage
	let convertData = JSON.stringify(participantData);
	localStorage.setItem("participant", convertData);
}

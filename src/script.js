/* Register Confirmation */
let participantData = [];

const form = document.getElementById("form");
form.addEventListener("submit", e => {
	e.preventDefault();

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

	// Grouping Data in an Object
	participantData.push({
		name,
		email,
		descriptionBox,
		selectModule,
		password,
		confirmPassword,
		sendNewsletter
	});

	// Storing Data on LocalStorage
	let convertData = JSON.stringify(participantData);
	localStorage.setItem("participant", convertData);

	/* Content Message*/
	let content = document.getElementById("form__message");
	let confirmation = `<span>Cadastrado com sucesso!</span>`;
	let clearMessage = "";

	/* Cleaning All Fields from Form */
	form.reset();

	/* Confirmation Message*/
	content.innerHTML = confirmation;
	setTimeout(() => {
		content.innerHTML = clearMessage;
	}, 3000);

	/* Checked Default Option */
	document.querySelector(
		'input[name = "radio__options"]:checked'
	).checked = true;
});

// function cleanField() {
// 	form.reset();
// document.querySelector("#name").value = "";
// document.querySelector("#email").value = "";
// document.querySelector("#description").value = "";
// document.querySelector("#modules__kenzie").value = "";
// document.querySelector("#password").value = "";
// document.querySelector("#confirm__password").value = "";
// document.querySelector(
// 	'input[name = "radio__options"]:checked'
// ).checked = false;
// }

/* Saving Data from Form to the localStorage */

// function saveDataParticipant() {
// 	// Showing Ddata on Console
// 	console.log(
// 		name +
// 			"\n" +
// 			email +
// 			"\n" +
// 			descriptionBox +
// 			"\n" +
// 			selectModule +
// 			"\n" +
// 			password +
// 			"\n" +
// 			confirmPassword +
// 			"\n" +
// 			sendNewsletter
// 	);
// }

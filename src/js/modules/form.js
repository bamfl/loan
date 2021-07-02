export default class Form {
	constructor(btnSelector, formSelector) {
		this.btn = document.querySelector(btnSelector);
		this.form = document.querySelector(formSelector);
		this.formData = new FormData(this.form);
	}

	createRequest() {
		fetch('./assets/server.php', {
			method: 'POST',
			body: this.formData
		})
		.then(data => console.log(data));
	}

	sendData() {
		this.form.addEventListener('submit', (event) => {
			event.preventDefault();

			this.createRequest();
		});
	}

	ready() {
		this.sendData();
	}
}
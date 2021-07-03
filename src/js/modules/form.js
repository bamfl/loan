export default class Form {
	constructor(btnSelector, formSelector) {
		this.btn = document.querySelector(btnSelector);
		this.form = document.querySelector(formSelector);
		this.emailInput = this.form.querySelector('input[type="email"]');
		this.phoneInput = this.form.querySelector('input[name="phone"]');
		this.formData = {};
	}

	createRequest() {
		fetch('./assets/server.php', {
			method: 'POST',
			body: this.formData
		})
		.then(data => {
			console.log(data);
			this.btn.innerHTML = 'Succsess!';
			this.btn.style.backgroundColor = '#9ec73d';
		})
		.catch(error => {
			console.log(error);
			this.btn.innerHTML = 'Error';
			this.btn.style.backgroundColor = '#d52b1e';
		})
		.finally(setTimeout(() => {
			this.form.reset();
			this.btn.innerHTML = 'Send';
			this.btn.style.backgroundColor = '#000';
		}, 5000));
	}

	validateEmail() {
		if (this.emailInput) {
			this.emailInput.addEventListener('input', () => {
				// русские буквы
				if (!this.emailInput.value.match(/[^а-яё]/ig)) { 
					this.emailInput.value = '';
				}
			});
		}
	}

	setPhoneMask() {
		if (this.phoneInput) {
			const events = ['input', 'focus', 'blur'];
	
			events.forEach(event => {
				this.phoneInput.addEventListener(event, () => {
					let matrix = '+1 (___) ___ __ __',
							i = 0,
							def = matrix.replace(/\D/g, ''),
							val = this.phoneInput.value.replace(/\D/g, '');
			
					if (def.length >= val.length) {
						val = def;
					}
			
					this.phoneInput.value = matrix.replace(/./g, function(a) {
						return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
					});
			
					if (event.type === 'blur') {
						if (this.phoneInput.value.length == 2) {
							this.phoneInput.value = '';
						}
					}
				});
			});
		}
	}

	sendData() {
		this.validateEmail();
		this.setPhoneMask();	

		this.form.addEventListener('submit', (event) => {
			event.preventDefault();

			this.formData = new FormData(this.form);
			this.createRequest();
		});
	}

	ready() {
		this.sendData();
	}
}
export default class Accordion {
	constructor(btnSelector, textSelector) {
		try {
			this.btn = document.querySelector(btnSelector);
			this.text = document.querySelector(textSelector);
		} catch (error) {}		
	}

	toggleAccordion() {
		if (!this.text.classList.contains('animated', 'fadeInUp')) {
			this.text.classList.add('animated', 'fadeInUp');
			this.text.style.display = 'block';
		} else {
			this.text.classList.remove('animated', 'fadeInUp');
			this.text.style.display = 'none';
		}
	}

	render() {
		try {
			this.btn.addEventListener('click', () => {
				this.toggleAccordion();
			});	
		} catch (error) {}
	}
}

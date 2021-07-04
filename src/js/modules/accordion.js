export default class Accordion {
	constructor(btnSelector, textSelector) {
		this.btn = document.querySelector(btnSelector);
		this.text = document.querySelector(textSelector);
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
		this.btn.addEventListener('click', () => {
			this.toggleAccordion();
		});
	}
}

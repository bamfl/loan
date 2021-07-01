export default class Slider {
	constructor(page, btns, logos, direction) {
		this.page = document.querySelector(page);
		this.slides = this.page.children;
		this.btns = document.querySelectorAll(btns);
		this.logos = document.querySelectorAll(logos);
		this.direction = direction;
		this.counter = 0;
	}

	toFirstSlide() {
		this.counter = 0;
		this.page.style.cssText = `
			transform: translate${this.direction}(0px);
			transition: transform 0.5s;
		`;
	}

	prevSlide() {
		if (this.counter > 0) {
			if (this.direction === 'Y') {
				this.page.style.cssText = `
					transform: translate${this.direction}(-${(this.counter - 1) * parseInt(getComputedStyle(this.slides[0]).height)}px);
					transition: transform 0.5s;
				`;
			} else {
				this.page.style.cssText = `
					transform: translate${this.direction}(-${(this.counter - 1) * parseInt(getComputedStyle(this.slides[0]).width)}px);
					transition: transform 0.5s;
				`;
			}

			this.counter--;
		} else {
			if (this.direction === 'Y') {
				this.counter = this.slides.length - 1;
				this.page.style.cssText = `
					transform: translate${this.direction}(-${(this.counter) * parseInt(getComputedStyle(this.slides[0]).height)}px);
					transition: transform 0.5s;
				`;
			} else {
				this.counter = this.slides.length;
				this.page.style.cssText = `
					transform: translate${this.direction}(-${(this.counter - 1) * parseInt(getComputedStyle(this.slides[0]).width) + (this.counter * 24)}px);
					transition: transform 0.5s;
				`;
			}
		}
	}

	nextSlide() {
		if (this.counter < this.slides.length - 1) {
			if (this.direction === 'Y') {
				this.page.style.cssText = `
					transform: translate${this.direction}(-${(this.counter + 1) * parseInt(getComputedStyle(this.slides[0]).height)}px);
					transition: transform 0.5s;
				`;
			} else {
				this.page.style.cssText = `
					transform: translate${this.direction}(-${(this.counter + 1) * parseInt(getComputedStyle(this.slides[0]).width) + (this.counter * 24)}px);
					transition: transform 0.5s;
				`;
			}
			this.counter++;
		} else {
			this.toFirstSlide();
		}
	}	

	render() {
		this.btns.forEach(btn => {
				btn.addEventListener('click', (event) => {
					event.preventDefault();

					if (btn.classList.contains('next') || btn.classList.contains('showup__next')) {
						this.nextSlide();
					} else if (btn.classList.contains('prevmodule') || btn.classList.contains('showup__prev')) {
						this.prevSlide();
					}
				});
		});

		this.logos.forEach(logo => {
			logo.addEventListener('click', (event) => {
				event.preventDefault();
	
				this.toFirstSlide();
			});
		});
	}
}

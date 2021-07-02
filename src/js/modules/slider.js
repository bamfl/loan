export default class Slider {
	constructor(page, btns, logos, direction, titlesSelector, autoplay) {
		this.page = document.querySelector(page);
		this.slides = this.page.children;
		this.btns = document.querySelectorAll(btns);
		this.logos = document.querySelectorAll(logos);
		this.direction = direction;
		this.counter = 0;
		this.titles = document.querySelectorAll(titlesSelector);
		this.autoplay = autoplay || false;
	}

	startAutoplay() {
		if (this.autoplay) {
			setInterval(() => this.nextSlide(), 10000);
		}
	}

	setActiveTitle() {
		if (this.titles) {
			this.titles.forEach((title, idx) => {
				title.style.opacity = '0.4';				
				
				if (idx === (this.counter)) {
					title.style.opacity = '1';
					
					try {
						const arrows = document.querySelectorAll('.card__controls-arrow');
						arrows.forEach((arrow,) => {
							arrow.style.opacity = '0';
						});

						arrows[idx].style.opacity = '1';
					} catch (error) {}

					try {
						const arrows = document.querySelectorAll('.card__description');
						arrows.forEach((arrow,) => {
							arrow.style.opacity = '0';
						});

						arrows[idx].style.opacity = '1';
					} catch (error) {}

					try {
						const arrows = document.querySelectorAll('.card__controls-arrow');
						arrows.forEach((arrow,) => {
							arrow.style.opacity = '0';
						});

						arrows[idx].style.opacity = '1';
					} catch (error) {}
				}
			});
		}
	}

	toFirstSlide() {
		this.counter = 0;
		this.page.style.cssText = `
			transform: translate${this.direction}(0px);
			transition: transform 0.5s;
		`;
		this.setActiveTitle();
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
					transform: translate${this.direction}(-${(this.counter - 1) * parseInt(getComputedStyle(this.slides[0]).width) + ((this.counter) * 24) - 24}px);
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
				this.counter = this.slides.length - 1;
				this.page.style.cssText = `
					transform: translate${this.direction}(-${(this.counter) * parseInt(getComputedStyle(this.slides[0]).width) + ((this.counter) * 24) - 24}px);
					transition: transform 0.5s;
				`;
			}
		}

		this.setActiveTitle();
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

		this.setActiveTitle();
	}

	render() {
		this.startAutoplay();

		this.btns.forEach(btn => {
				btn.addEventListener('click', (event) => {
					event.preventDefault();

					if (btn.classList.contains('next') || btn.classList.contains('showup__next') || btn.classList.contains('slick-next')) {
						this.nextSlide();

					} else if (btn.classList.contains('prevmodule') || btn.classList.contains('showup__prev') || btn.classList.contains('slick-prev')) {
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

		this.setActiveTitle();
	}
}

export default class VideoPlayer {
	constructor(openBtnSelector, closeBtnSelector, videoSelector, iframeSelector) {
		this.openBtn = document.querySelector(openBtnSelector);
		this.closeBtn = document.querySelector(closeBtnSelector);
		this.videoBlock = document.querySelector(videoSelector);
		this.iframe = document.querySelector(iframeSelector);
		this.iframeSrc = this.iframe.src;
		this.url = this.openBtn.dataset.url || this.openBtn.parentElement.dataset.url;
		this.isClosedNextVideo = true;
	}

	unlockSecondVideo() {
		if (!this.isClosedNextVideo) {
			const nextVideo = this.openBtn.parentElement.parentElement.nextElementSibling,
						nextCircle = nextVideo.querySelector('.play__circle');

			nextVideo.style.opacity = '1';
			nextVideo.style.filter = 'grayscale(0%)';
			nextCircle.style.background = '#fff';
			nextCircle.classList.remove('closed');
			nextCircle.innerHTML = `
				<svg viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M14 8L0 16V0L14 8Z" fill="#6D53AF"/>
				</svg>
			`;
		}
	}

	showPlayer() {
		this.changeUrl();

		if (!this.openBtn.classList.contains('closed')) {
			this.videoBlock.style.display = 'flex';
		}

		if (this.openBtn.parentElement.parentElement.classList.contains('module__video-item_1') || 
				this.openBtn.parentElement.parentElement.classList.contains('module__video-item_3')) {
			this.isClosedNextVideo = false;
		}

		this.unlockSecondVideo();
	}

	closePlayer() {
		this.videoBlock.style.display = 'none';
		this.changeUrl();
	}

	changeUrl() {
		let end = this.iframeSrc.lastIndexOf('/') + 1;
		this.iframeSrc = this.iframeSrc.slice(0, end) + this.url;
		this.iframe.setAttribute('src', this.iframeSrc);
	}

	render() {
		this.openBtn.addEventListener('click', () => {
			this.showPlayer();
		});

		this.closeBtn.addEventListener('click', () => {
			this.closePlayer();
		});
	}
}

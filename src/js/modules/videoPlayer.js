export default class VideoPlayer {
	constructor(openBtnSelector, closeBtnSelector, videoSelector, iframeSelector) {
		this.openBtn = document.querySelector(openBtnSelector);
		this.closeBtn = document.querySelector(closeBtnSelector);
		this.videoBlock = document.querySelector(videoSelector);
		this.iframe = document.querySelector(iframeSelector);
		this.iframeSrc = this.iframe.src;
		this.url = this.openBtn.dataset.url;
	}

	showPlayer() {
		this.videoBlock.style.display = 'flex';
	}

	closePlayer() {
		this.videoBlock.style.display = 'none';
	}

	changeUrl() {
		console.dir(this.url);
		let end = this.iframeSrc.lastIndexOf('/') + 1;
		this.iframeSrc = this.iframeSrc.slice(0, end) + this.url;
		this.iframe.setAttribute('src', this.iframeSrc);
	}

	render() {
		this.openBtn.addEventListener('click', () => {
			this.changeUrl();
			this.showPlayer();
		});

		this.closeBtn.addEventListener('click', () => {
			this.closePlayer();
		});
	}
}
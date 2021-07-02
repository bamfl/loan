import Slider from './modules/slider';
import VideoPlayer from './modules/videoPlayer';

window.addEventListener('DOMContentLoaded', () => {
	try {
		const mainSlider = new Slider('.page', '.next', '.logo', 'Y');
		mainSlider.render();
	} catch (error) {}

	try {
		const moduleSlider = new Slider('.moduleapp', '.next, .prevmodule', '.logo', 'Y');
		moduleSlider.render();
	} catch (error) {}

	try {
		const whyVideoPlayer = new VideoPlayer('.play', '.close', '.overlay', '#frame iframe');
		whyVideoPlayer.render();
	} catch (error) {}

	try {
		const horizontalSlider = new Slider('.showup__content-slider', '.showup__prev, .showup__next', '.logo', 'X', '.showup__content-slider .card__title');
		horizontalSlider.render();
	} catch (error) {}
});

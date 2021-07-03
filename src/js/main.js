import Slider from './modules/slider';
import VideoPlayer from './modules/videoPlayer';
import Diff from './modules/difference';
import Form from './modules/form';

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
		const horizontalSliderOne = new Slider('.showup__content-slider', '.showup__prev, .showup__next', '.logo', 'X', '.showup__content-slider .card__title');
		horizontalSliderOne.render();
	} catch (error) {}

	try {
		const horizontalSliderTwo = new Slider('.modules__content-slider', '.slick-prev, .slick-next', '.logo', 'X', '.modules__content-slider .card__title', true);
		horizontalSliderTwo.render();
	} catch (error) {}

	try {
		const horizontalSliderThree = new Slider('.feed__slider', '.slick-prev, .slick-next', '.logo', 'X', '.modules__content-slider .card__title', true);
		horizontalSliderThree.render();
	} catch (error) {}

	try {
		const whyVideoPlayer = new VideoPlayer('.play', '.close', '.overlay', '#frame iframe');
		whyVideoPlayer.render();
	} catch (error) {}	

	try {
		const diffOne = new Diff('.officerold', '.officerold .officer__card-item', '.officerold .plus');
		diffOne.render();
	} catch (error) {}

	try {
		const diffTwo = new Diff('.officernew', '.officernew .officer__card-item', '.officernew .plus');
		diffTwo.render();
	} catch (error) {}

	try {
		const joinForm = new Form('.join__wrapper .btn', '.join__wrapper .form');
		joinForm.ready();
	} catch (error) {}

	try {
		const scheduleForm = new Form('.schedule__form .btn', '.schedule__form .form');
		scheduleForm.ready();
	} catch (error) {}
});

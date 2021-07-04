import Slider from './modules/slider';
import VideoPlayer from './modules/videoPlayer';
import Diff from './modules/difference';
import Form from './modules/form';
import Accordion from './modules/accordion';

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
		const whyVideoPlayer = new VideoPlayer('.page .play', '.close', '.overlay', '#frame iframe');
		whyVideoPlayer.render();
	} catch (error) {}
	
	try {
		const showupVideoPlayerModule1 = new VideoPlayer('#module1 .module__video-item_1 .play__circle', '.close', '.overlay', '#frame iframe');
		showupVideoPlayerModule1.render();
	} catch (error) {}

	try {
		const evolveVideoPlayerModule1 = new VideoPlayer('#module1 .module__video-item_2 .play__circle', '.close', '.overlay', '#frame iframe');
		evolveVideoPlayerModule1.render();
	} catch (error) {}

	try {
		const showupVideoPlayerModule2 = new VideoPlayer('#module2 .module__video-item_3 .play__circle', '.close', '.overlay', '#frame iframe');
		showupVideoPlayerModule2.render();
	} catch (error) {}

	try {
		const evolveVideoPlayerModule2 = new VideoPlayer('#module2 .module__video-item_4 .play__circle', '.close', '.overlay', '#frame iframe');
		evolveVideoPlayerModule2.render();
	} catch (error) {}
		
	try {
		const showupVideoPlayerModule3 = new VideoPlayer('#module3 .module__video-item_1 .play__circle', '.close', '.overlay', '#frame iframe');
		showupVideoPlayerModule3.render();
	} catch (error) {}

	try {
		const evolveVideoPlayerModule3 = new VideoPlayer('#module3 .module__video-item_2 .play__circle', '.close', '.overlay', '#frame iframe');
		evolveVideoPlayerModule3.render();
	} catch (error) {}

	try {
		const showupVideoPlayerModule4 = new VideoPlayer('#module4 .module__video-item_3 .play__circle', '.close', '.overlay', '#frame iframe');
		showupVideoPlayerModule4.render();
	} catch (error) {}

	try {
		const evolveVideoPlayerModule4 = new VideoPlayer('#module4 .module__video-item_4 .play__circle', '.close', '.overlay', '#frame iframe');
		evolveVideoPlayerModule4.render();
	} catch (error) {}

	try {
		const showupVideoPlayerModule5 = new VideoPlayer('#module5 .module__video-item_1 .play__circle', '.close', '.overlay', '#frame iframe');
		showupVideoPlayerModule5.render();
	} catch (error) {}

	try {
		const evolveVideoPlayerModule5 = new VideoPlayer('#module5 .module__video-item_2 .play__circle', '.close', '.overlay', '#frame iframe');
		evolveVideoPlayerModule5.render();
	} catch (error) {}
	
	try {
		const showupVideoPlayerModule6 = new VideoPlayer('#module6 .module__video-item_3 .play__circle', '.close', '.overlay', '#frame iframe');
		showupVideoPlayerModule6.render();
	} catch (error) {}

	try {
		const evolveVideoPlayerModule6 = new VideoPlayer('#module4 .module__video-item_4 .play__circle', '.close', '.overlay', '#frame iframe');
		evolveVideoPlayerModule6.render();
	} catch (error) {}
	
	try {
		const showupVideoPlayerModule7 = new VideoPlayer('#module7 .module__video-item_1 .play__circle', '.close', '.overlay', '#frame iframe');
		showupVideoPlayerModule7.render();
	} catch (error) {}

	try {
		const evolveVideoPlayerModule7 = new VideoPlayer('#module7 .module__video-item_2 .play__circle', '.close', '.overlay', '#frame iframe');
		evolveVideoPlayerModule7.render();
	} catch (error) {}
		
	try {
		const showupVideoPlayerModule8 = new VideoPlayer('#module8 .module__video-item_3 .play__circle', '.close', '.overlay', '#frame iframe');
		showupVideoPlayerModule8.render();
	} catch (error) {}

	try {
		const evolveVideoPlayerModule8 = new VideoPlayer('#module8 .module__video-item_4 .play__circle', '.close', '.overlay', '#frame iframe');
		evolveVideoPlayerModule8.render();
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

	try {
		const accordionModule1 = new Accordion('#module1 .module__info-show', '#module1 .msg');
		accordionModule1.render();
	} catch (error) {}

	try {
		const accordionModule2 = new Accordion('#module2 .module__info-show', '#module2 .msg');
		accordionModule2.render();
	} catch (error) {}

	try {
		const accordionModule3 = new Accordion('#module3 .module__info-show', '#module3 .msg');
		accordionModule3.render();
	} catch (error) {}

	try {
		const accordionModule4 = new Accordion('#module4 .module__info-show', '#module4 .msg');
		accordionModule4.render();
	} catch (error) {}

	try {
		const accordionModule5 = new Accordion('#module5 .module__info-show', '#module5 .msg');
		accordionModule5.render();
	} catch (error) {}

	try {
		const accordionModule6 = new Accordion('#module6 .module__info-show', '#module6 .msg');
		accordionModule6.render();
	} catch (error) {}

	try {
		const accordionModule7 = new Accordion('#module7 .module__info-show', '#module7 .msg');
		accordionModule7.render();
	} catch (error) {}

	try {
		const accordionModule8 = new Accordion('#module8 .module__info-show', '#module8 .msg');
		accordionModule8.render();
	} catch (error) {}
});

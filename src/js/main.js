import Slider from './modules/slider';
import VideoPlayer from './modules/videoPlayer';
import Diff from './modules/difference';
import Form from './modules/form';
import Accordion from './modules/accordion';

window.addEventListener('DOMContentLoaded', () => {
	new Slider('.page', '.next', '.logo', 'Y').render();

	new Slider('.moduleapp', '.next, .prevmodule', '.logo', 'Y').render();

	new Slider('.showup__content-slider', '.showup__prev, .showup__next', '.logo', 'X', '.showup__content-slider .card__title').render();

	new Slider('.modules__content-slider', '.slick-prev, .slick-next', '.logo', 'X', '.modules__content-slider .card__title', true).render();

	new Slider('.feed__slider', '.slick-prev, .slick-next', '.logo', 'X', '.modules__content-slider .card__title', true).render();

	new VideoPlayer('.page .play', '.close', '.overlay', '#frame iframe').render();

	const modulesVideoSelectors = [
		'#module1 .module__video-item_1 .play__circle',
		'#module1 .module__video-item_2 .play__circle',
		'#module2 .module__video-item_3 .play__circle',
		'#module2 .module__video-item_4 .play__circle',
		'#module3 .module__video-item_1 .play__circle',
		'#module3 .module__video-item_2 .play__circle',
		'#module4 .module__video-item_3 .play__circle',
		'#module4 .module__video-item_4 .play__circle',
		'#module5 .module__video-item_1 .play__circle',
		'#module5 .module__video-item_2 .play__circle',
		'#module6 .module__video-item_3 .play__circle',
		'#module6 .module__video-item_4 .play__circle',
		'#module7 .module__video-item_1 .play__circle',
		'#module7 .module__video-item_2 .play__circle',
		'#module8 .module__video-item_3 .play__circle',
		'#module8 .module__video-item_4 .play__circle'
	];

	modulesVideoSelectors.forEach(moduleSelector => {
		new VideoPlayer(moduleSelector, '.close', '.overlay', '#frame iframe').render();
	});

	new Diff('.officerold', '.officerold .officer__card-item', '.officerold .plus').render();

	new Diff('.officernew', '.officernew .officer__card-item', '.officernew .plus').render();

	new Form('.join__wrapper .btn', '.join__wrapper .form').ready();

	new Form('.schedule__form .btn', '.schedule__form .form').ready();

	const accordionsModuleSelectors = [
		'#module1 .module__info-show',
		'#module2 .module__info-show',
		'#module3 .module__info-show',
		'#module4 .module__info-show',
		'#module5 .module__info-show',
		'#module6 .module__info-show',
		'#module7 .module__info-show',
		'#module8 .module__info-show'
	];

	accordionsModuleSelectors.forEach((accordionSelector, idx) => {
		new Accordion(accordionSelector, `#module${idx + 1} .msg`).render();
	});
});

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
	
	new VideoPlayer('#module1 .module__video-item_1 .play__circle', '.close', '.overlay', '#frame iframe').render();

	new VideoPlayer('#module1 .module__video-item_2 .play__circle', '.close', '.overlay', '#frame iframe').render();

	new VideoPlayer('#module2 .module__video-item_3 .play__circle', '.close', '.overlay', '#frame iframe').render();

	new VideoPlayer('#module2 .module__video-item_4 .play__circle', '.close', '.overlay', '#frame iframe').render();
		
	new VideoPlayer('#module3 .module__video-item_1 .play__circle', '.close', '.overlay', '#frame iframe').render();

	new VideoPlayer('#module3 .module__video-item_2 .play__circle', '.close', '.overlay', '#frame iframe').render();

	new VideoPlayer('#module4 .module__video-item_3 .play__circle', '.close', '.overlay', '#frame iframe').render();

	new VideoPlayer('#module4 .module__video-item_4 .play__circle', '.close', '.overlay', '#frame iframe').render();

	new VideoPlayer('#module5 .module__video-item_1 .play__circle', '.close', '.overlay', '#frame iframe').render();

	new VideoPlayer('#module5 .module__video-item_2 .play__circle', '.close', '.overlay', '#frame iframe').render();
	
	new VideoPlayer('#module6 .module__video-item_3 .play__circle', '.close', '.overlay', '#frame iframe').render();

	new VideoPlayer('#module4 .module__video-item_4 .play__circle', '.close', '.overlay', '#frame iframe').render();
	
	new VideoPlayer('#module7 .module__video-item_1 .play__circle', '.close', '.overlay', '#frame iframe').render();

	new VideoPlayer('#module7 .module__video-item_2 .play__circle', '.close', '.overlay', '#frame iframe').render();
		
	new VideoPlayer('#module8 .module__video-item_3 .play__circle', '.close', '.overlay', '#frame iframe').render();

	new VideoPlayer('#module8 .module__video-item_4 .play__circle', '.close', '.overlay', '#frame iframe').render();

	new Diff('.officerold', '.officerold .officer__card-item', '.officerold .plus').render();

	new Diff('.officernew', '.officernew .officer__card-item', '.officernew .plus').render();

	new Form('.join__wrapper .btn', '.join__wrapper .form').ready();

	new Form('.schedule__form .btn', '.schedule__form .form').ready();

	new Accordion('#module1 .module__info-show', '#module1 .msg').render();

	new Accordion('#module2 .module__info-show', '#module2 .msg').render();

	new Accordion('#module3 .module__info-show', '#module3 .msg').render();

	new Accordion('#module4 .module__info-show', '#module4 .msg').render();

	new Accordion('#module5 .module__info-show', '#module5 .msg').render();

	new Accordion('#module6 .module__info-show', '#module6 .msg').render();

	new Accordion('#module7 .module__info-show', '#module7 .msg').render();

	new Accordion('#module8 .module__info-show', '#module8 .msg').render();
});

import Slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
	try {
		const mainSlider = new Slider('.page', '.next', '.logo', 'Y');
		mainSlider.render();
	} catch (error) {}

	try {
		const moduleSlider = new Slider('.moduleapp', '.next, .prevmodule', '.logo', 'Y');
		moduleSlider.render();
	} catch (error) {}
});

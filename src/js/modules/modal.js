const showModal = (counter) => {
	const modal = document.querySelector('.hanson');
	if (counter === 2) {
		setTimeout(() => {
			modal.classList.add('animated', 'fadeInUp');
			modal.style.display = 'block';
		}, 3000);
	}
};

export default showModal;
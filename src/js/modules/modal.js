const showModal = (counter) => {
	try {
		const modal = document.querySelector('.hanson');
		if (counter === 2) {
			setTimeout(() => {
				modal.classList.add('animated', 'fadeInUp');
				modal.style.display = 'block';
			}, 3000);
		}	
	} catch (error) {}
};

export default showModal;
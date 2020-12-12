let range_slider = document.querySelector('.range__slider');
	range_slider.addEventListener('mousemove', function () {
		let x = range_slider.value;
		let color = 'linear-gradient(90deg, rgb(15, 31, 179)' + x + '%, rgb(15, 168, 179)' + x + '%)';
		range_slider.style.background = color;
	});
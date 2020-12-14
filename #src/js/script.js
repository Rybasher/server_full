@@include("alert.js");
@@include("ibg.js");
@@include("burger.js");
@@include("slick.js");
@@include("animation.js");
@@include("accordion.js");
@@include("progress.js");
@@include("form.js");
@@include("range.js");



function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});

function range(){
	let range_slider = document.querySelector('.range__slider');
	let x = range_slider.value;
	let color = 'linear-gradient(90deg, rgb(15, 31, 179)' + x + '%, rgb(15, 168, 179)' + x + '%)';
	range_slider.style.background = color;

}
// range_slider.addEventListener('mousemove', function () {
// 	console.log("asd");
// 	let x = range_slider.value;
// 	let color = 'linear-gradient(90deg, rgb(15, 31, 179)' + x + '%, rgb(15, 168, 179)' + x + '%)';
// 	range_slider.style.background = color;
// });



AOS.init();

let image__video = document.querySelector('.image__video');
let circle = document.querySelector('.image__video>.circle');
let video = document.querySelector('.video');

image__video.addEventListener('click', function () {
	video.classList.toggle('played');
	circle.classList.toggle('played');
	if (video.classList.contains("played")) {
		video.play();
	}
	else {
		video.pause();
	}
});


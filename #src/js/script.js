@@include("alert.js");
@@include("ibg.js");
@@include("burger.js");
@@include("slick.js");
@@include("animation.js");
@@include("accordion.js");
@@include("progress.js");


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


$(document).ready(function ($) {

	$('.img__form').click(function () {

		$('.search__form, main, header, html').toggleClass("show");
		$(document).mouseup(function (e) { // событие клика по веб-документу
			let div = $(".search__form"); // тут указываем ID элемента
			if (!div.is(e.target) // если клик был не по нашему блоку
				&& div.has(e.target).length === 0) { // и не по его дочерним элементам
				$('main, .search__form, header, html').removeClass('show');

			}
		});

	})
	$('.close').click(function () {
		$('.search__form, main').removeClass("show");

	})
	$('.clear').click(function () {
		$('.search__form>div>span>input').val("");
	})
	$(".education__list").after().click(function () {
		console.log("asd")
		$(this).toggleClass("opnd_g");
	})
	if ($('.education__list').find('.education__li').length > 5) {
		console.log(">>");
		$('.education__list').after().click(function () {
			// $('.education__list .education__li(n+5)').slideToggle('');
			$('.education__list li:nth-child(n+7)').slideToggle('');

			// $(this).toggleClass('opnd_g');


		});
	} else { $('.education__list').after().hide(); }
});

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
})

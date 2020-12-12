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

			


		});
	} else { $('.education__list').after().hide(); }
});
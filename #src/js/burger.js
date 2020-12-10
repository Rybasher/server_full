$(".icon__menu").click(function () {
	$(this).toggleClass("active");
	$('.menu__body, .header__nav').toggleClass('active');
	$('body').toggleClass('lock');
})
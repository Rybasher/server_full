$(".icon__menu").click(function () {
	$(this).toggleClass("active");
	$('.menu__body, .header__nav').toggleClass('active');
	$('body').toggleClass('lock');
})
$(".close").click(function () {
	$('.icon__menu').removeClass("active");
	$('.menu__body, .header__nav').removeClass('active');
	$('body').toggleClass('lock');
})
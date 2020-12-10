
$(document).ready(function () {
	$('.slider').slick({
		arrows: false,
		dots: true
	});
});


var mySwiper = new Swiper('.swiper-container', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		type: 'progressbar'
	},


	// Navigation arrows
	// navigation: {
	// 	nextEl: '.swiper-button-next',
	// 	prevEl: '.swiper-button-prev',
	// },

	// And if we need scrollbar
	// scrollbar: {
	// 	el: '.swiper-scrollbar',
	// },
})
if (document.documentElement.clientWidth > "1100") {
	var mySwiper = new Swiper('.swiper-container-life', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		slidesPerView: 3,
		slidesPerGroup: 3,
		spaceBetween: 30,

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			type: 'progressbar'
		},


		// Navigation arrows
		// navigation: {
		// 	nextEl: '.swiper-button-next',
		// 	prevEl: '.swiper-button-prev',
		// },

		// And if we need scrollbar
		// scrollbar: {
		// 	el: '.swiper-scrollbar',
		// },
	})

}
if (document.documentElement.clientWidth < "1100") {
	var mySwiper = new Swiper('.swiper-container-life', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		slidesPerView: 2,
		slidesPerGroup: 2,
		spaceBetween: 30,

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			type: 'progressbar'
		},


		// Navigation arrows
		// navigation: {
		// 	nextEl: '.swiper-button-next',
		// 	prevEl: '.swiper-button-prev',
		// },

		// And if we need scrollbar
		// scrollbar: {
		// 	el: '.swiper-scrollbar',
		// },
	})

}
if (document.documentElement.clientWidth < "767") {
	var mySwiper = new Swiper('.swiper-container-life', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 30,

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			type: 'progressbar'
		},


		// Navigation arrows
		// navigation: {
		// 	nextEl: '.swiper-button-next',
		// 	prevEl: '.swiper-button-prev',
		// },

		// And if we need scrollbar
		// scrollbar: {
		// 	el: '.swiper-scrollbar',
		// },
	})

}



var mySwiper = new Swiper('.swiper-container-courses', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination-courses',
		type: 'bullets'
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	// scrollbar: {
	// 	el: '.swiper-scrollbar',
	// },
})
if (document.documentElement.clientWidth > "1100") {
	var mySwiper = new Swiper('.container__partners-body', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		slidesPerView: 4,
		slidesPerGroup: 4,
		spaceBetween: 30,
	
		// If we need pagination
		pagination: {
			el: '.swiper-pagination-courses',
			type: 'bullets'
		},
	
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	
		
	})
}
if (document.documentElement.clientWidth < "1100") {
	var mySwiper = new Swiper('.container__partners-body', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		slidesPerView: 3,
		slidesPerGroup: 3,
		spaceBetween: 30,
	
		// If we need pagination
		pagination: {
			el: '.swiper-pagination-courses',
			type: 'bullets'
		},
	
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	
		
	})
}
if (document.documentElement.clientWidth < "767") {
	var mySwiper = new Swiper('.container__partners-body', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		slidesPerView: 2,
		slidesPerGroup: 2,
		spaceBetween: 30,
	
		// If we need pagination
		pagination: {
			el: '.swiper-pagination-courses',
			type: 'bullets'
		},
	
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	
		
	})
}
if (document.documentElement.clientWidth < "520") {
	var mySwiper = new Swiper('.container__partners-body', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 30,
	
		// If we need pagination
		pagination: {
			el: '.swiper-pagination-courses',
			type: 'bullets'
		},
	
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	
		
	})
}


var mySwiper = new Swiper('.swiper-container-home', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination-courses',
		type: 'bullets'
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	// scrollbar: {
	// 	el: '.swiper-scrollbar',
	// },
})


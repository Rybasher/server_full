"use strict";

var animItems = document.querySelectorAll(".anim-items");
var animItems_two = document.querySelectorAll(".anim-side");

if (animItems.length > 0) {
  var animOnSCroll = function animOnSCroll() {
    for (var index = 0; index < animItems.length; index++) {
      var animItem = animItems[index];
      var animItemHeight = animItem.offsetHeight;
      var animItemOffset = offset(animItem).top;
      var animStart = 4;
      var animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
        animItem.classList.add("active");
      } // else {
      // 	animItem.classList.remove("active");
      // }

    }
  };

  var offset = function offset(el) {
    var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop; // const rect = el.getBoundingClientReact(), scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    };
  };

  document.querySelector("body").addEventListener('scroll', animOnSCroll);
  animOnSCroll();
}

if (animItems_two.length > 0) {
  var animOnSCroll__two = function animOnSCroll__two() {
    for (var index = 0; index < animItems_two.length; index++) {
      var animItemTwo = animItems_two[index];
      var animItemHeightTwo = animItemTwo.offsetHeight;

      var animItemOffsetTwo = _offset(animItemTwo).top;

      var animStartTwo = 4;
      var animItemPointTwo = window.innerHeight - animItemHeightTwo / animStartTwo;

      if (animItemHeightTwo > window.innerHeight) {
        animItemPointTwo = window.innerHeight - window.innerHeight / animStartTwo;
      }

      if (pageYOffset > animItemOffsetTwo - animItemPointTwo && pageYOffset < animItemOffsetTwo + animItemHeightTwo) {
        animItemTwo.classList.add("active");
      } // else {
      // 	animItem.classList.remove("active");
      // }

    }
  };

  var _offset = function _offset(el) {
    var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop; // const rect = el.getBoundingClientReact(), scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    };
  };

  document.querySelector("body").addEventListener('scroll', animOnSCroll__two);
  animOnSCroll__two();
}

var anchors = document.querySelectorAll('.menu__link[href*="#"]');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  var _loop = function _loop() {
    var anchor = _step.value;
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var blockID = anchor.getAttribute('href').substr(1);
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };

  for (var _iterator = anchors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    _loop();
  } // $(document).ready(function () {
  // 	$('a.menu__link').click(function () {
  // 		$('html, body').animate({
  // 			scrollTop: $($(this).attr("href")).offset().top + "px"
  // 		}, {
  // 			duration: 1000,
  // 			easing: "swing"
  // 		});
  // 		return false;
  // 	});
  // })

} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}
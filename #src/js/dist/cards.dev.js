"use strict";

var cards = document.querySelectorAll('.card');

for (var i = 0; i < cards.length; i++) {
  var _card = cards[i];

  _card.addEventListener('mousemove', rotate);

  _card.addEventListener('mouseout', stopRotate);
}

function rotate(e) {
  var cardItem = this.querySelector('.card-item');
  var halfHeight = cardItem.offsetHeight / 2;
  cardItem.style.transform = 'rotateX(' + -(e.offsetY - halfHeight) / 7 + 'deg) rotateY(' + (e.offsetX - halfHeight) / 7 + 'deg)';
}

function stopRotate() {
  var cardItem = this.querySelector('.card-item');
  cardItem.style.transform = 'rotate(0)';
}

console.log(card);
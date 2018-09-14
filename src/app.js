const Cards = require('./models/cards.js')
const CardWrapper = require('./views/card_wrapper.js')

document.addEventListener('DOMContentLoaded', () => {
  const cards = new Cards;
  cards.getData();
  const bodyElement = document.querySelector('body');
  const cardWrapper = new CardWrapper(bodyElement);
  cardWrapper.bindEvents();
});

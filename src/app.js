const Cards = require('./models/cards.js')
const CardWrapper = require('./views/card_wrapper.js')
const SelectView = require('./views/select_view.js')

document.addEventListener('DOMContentLoaded', () => {
  const cards = new Cards;
  cards.getData();
  const selectElement = document.querySelector('.select-card')
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();
  const bodyElement = document.querySelector('body');
  const cardWrapper = new CardWrapper(bodyElement);
  cardWrapper.bindEvents();
});

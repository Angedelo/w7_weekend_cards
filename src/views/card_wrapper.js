const PubSub = require('../helpers/pub_sub')
const CardView = require('./card_view')

const CardWrapper = function (element) {
  this.element = element;
};

CardWrapper.prototype.bindEvents = function () {
  PubSub.subscribe('Cards:all-cards', (event) => {
    const filteredCardData = event.detail;
    this.renderCardView(filteredCardData);
  });
};

CardWrapper.prototype.renderCardView = function (cards, element) {
  cards.forEach((card) => {
    const newCardView = new CardView(card, this.element);
    // console.log(newCardView);
    newCardView.render();
  });
};

module.exports = CardWrapper;

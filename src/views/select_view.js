const PubSub = require('../helpers/pub_sub')
const Append = require('../helpers/append')

const SelectView = function (selectElement) {
  this.selectElement = selectElement;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Cards:all-cards', (event) => {
    const cardsReady = event.detail;
    // console.log(cardsReady);
    this.populateSelect(cardsReady);
  });
};

SelectView.prototype.populateSelect = function (cards) {
  cards.forEach((card) => {
    // console.log(card);
    const option = new Append('option', card.title, this.selectElement);
  });
};

module.exports = SelectView;

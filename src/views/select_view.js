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

  this.selectElement.addEventListener('change', (event) => {
    const chosenCardIndex = event.target.value;
    PubSub.publish('SelectView:card-index', chosenCardIndex);
  });
};



SelectView.prototype.populateSelect = function (cards) {
  cards.forEach((card, index) => {
    // console.log(card);
    const option = new Append('option', card.title, this.selectElement);
    option.value = index;
  });
};

module.exports = SelectView;

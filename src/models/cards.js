const PubSub = require('../helpers/pub_sub')
const Request = require('../helpers/request_helper')

const Cards = function() {
  this.cards = [];
};

Cards.prototype.getData = function () {
  const request = new Request ('https://netrunnerdb.com/api/2.0/public/cards')
  request.get((allData) => {
    this.handleData(allData.data);
    PubSub.publish('Cards:all-cards', this.cards);
  });
};

Cards.prototype.handleData = function (allCards) {
  allCards.map((card, index) => {
    return this.cards[index] = {
      title: card.title,
      keywords: card.keywords,
      type_code: card.type_code,
      text: card.text
    }
  });
};

module.exports = Cards;

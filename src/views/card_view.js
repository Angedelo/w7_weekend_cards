const Append = require('../helpers/append.js')

const CardView = function (card, element) {
  this.card = card;
  this.element = element;
};

CardView.prototype.render = function () {
  const title = new Append('h2', this.card.title, this.element)
  const type_code = new Append('p', this.card.type_code, this.element)
  const keywords = new Append('p', this.card.keywords, this.element)
  const text = new Append('p', this.card.text, this.element)
};

module.exports = CardView;

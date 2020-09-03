export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedCards = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(card) {
    this._container.append(card);
  }

  prependItem(card) {
    this._container.prepend(card);
  }

  clear() {
    this._container.innerHTML = '';
  }

  renderCards() {
    this.clear();
    this._renderedCards.forEach((card) => {
      this._renderer(card);
    })
  }
}



export class Card {
  constructor({ item, handleCardClick }, templateSelector) {
    this._image = item.link;
    this._title = item.name;
    this._templateSelector = templateSelector;
    this.handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(`#${this._templateSelector}`)
      .content
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    const cardElementImage = this._element.querySelector('.places-grid__image');
    this._element.querySelector('.places-grid__delete-btn').addEventListener('click', function (evt) {
      evt.target.closest('.places-grid__element').remove();
    }.bind(this._element));

    this._element.querySelector('.places-grid__like-btn').addEventListener('click', function (evt) {
      evt.target.classList.toggle('places-grid__like-btn_active');
    })
    cardElementImage.addEventListener('click', this.handleCardClick)
  }


  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector('.places-grid__image').src = this._image;
    this._element.querySelector('.places-grid__text').textContent = this._title;
    this._element.querySelector('.places-grid__image').alt = this._title;
    this._setEventListeners();

    return this._element;
  }
}


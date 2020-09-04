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
    const cardElementImage = this._element.querySelector('.places-grid__image');
    const cardElementTitle = this._element.querySelector('.places-grid__text');

    cardElementImage.src = this._image;
    cardElementTitle.textContent = this._title;
    cardElementImage.alt = this._title;
    this._setEventListeners();

    return this._element;
  }
}


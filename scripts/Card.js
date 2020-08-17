import { popupOpen } from './utils.js';

const popupPhoto = document.querySelector('.popup_modal_type_photo');
const popupImage = popupPhoto.querySelector('.popup__full-image');
const popupTitle = popupPhoto.querySelector('.popup__image-title');

export class Card {
  constructor(image, title, templateSelector) {
    this._image = image;
    this._title = title;
    this._templateSelector = templateSelector;
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
    const cardElementTitle = this._title;
    this._element.querySelector('.places-grid__delete-btn').addEventListener('click', function (evt) {
      evt.target.closest('.places-grid__element').remove();
    })
    this._element.querySelector('.places-grid__like-btn').addEventListener('click', function (evt) {
      evt.target.classList.toggle('places-grid__like-btn_active');
    })
    cardElementImage.addEventListener('click', function() {
      popupImage.src = cardElementImage.src;
      popupImage.alt = cardElementTitle;
      popupTitle.textContent = cardElementTitle;
      popupOpen(popupPhoto);
    })
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


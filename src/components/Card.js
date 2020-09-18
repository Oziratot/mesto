export default class Card {
  constructor({ item, handleCardClick, handleLikeClick, handleDeleteClick }, userId, templateSelector) {
    this._image = item.link;
    this._title = item.name;
    this._likes = item.likes;
    this._ownerId = item.owner._id;
    this._userId = userId;

    this._templateSelector = templateSelector;

    this.handleCardClick = handleCardClick;
    this.handleLikeClick = handleLikeClick;
    this.handleDeleteClick = handleDeleteClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(`#${this._templateSelector}`)
      .content
      .querySelector('.places-grid__element')
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    this._element.querySelector('.places-grid__delete-btn').addEventListener('click', this.handleDeleteClick);
    this._element.querySelector('.places-grid__like-btn').addEventListener('click', this.handleLikeClick);
    this._element.querySelector('.places-grid__image').addEventListener('click', this.handleCardClick);
  }

  deleteCard() {
    this._element.querySelector('.places-grid__delete-btn').removeEventListener('click', this.handleDeleteClick);
    this._element.querySelector('.places-grid__like-btn').removeEventListener('click', this.handleLikeClick);
    this._element.querySelector('.places-grid__image').removeEventListener('click', this.handleCardClick);
    this._element.remove();
    this._element = null;
  }

  isLiked() {
    return this._likes.some((like) => {
      return like._id === this._userId
    })
  }

  _toogleLikeBtn() {
    this._element.querySelector('.places-grid__like-btn').classList.toggle('places-grid__like-btn_active');
  }

  handleLike(likesQty) {
    this._toogleLikeBtn();
    this._element.querySelector('.places-grid__like-counter').textContent = likesQty;
  }

  generateCard() {
    this._element = this._getTemplate();
    const cardElementImage = this._element.querySelector('.places-grid__image');
    const cardElementTitle = this._element.querySelector('.places-grid__text');
    const cardElementDeleteBtn = this._element.querySelector('.places-grid__delete-btn')
    const cardElementLikes = this._element.querySelector('.places-grid__like-counter');

    if (!(this._userId === this._ownerId)) {
      cardElementDeleteBtn.style.display = 'none';
    }

    if (this.isLiked()) {
      this._toogleLikeBtn();
    }

    cardElementLikes.textContent = this._likes.length;
    cardElementImage.src = this._image;
    cardElementTitle.textContent = this._title;
    cardElementImage.alt = this._title;

    this._setEventListeners();

    return this._element;
  }
}


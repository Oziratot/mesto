import Popup from './Popup.js';
import {formSelector} from '../utils/constants.js';

export default class PopupWithFormSubmit extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  popupLoader(isLoading, initialText) {
    const saveBtn = this._popup.querySelector('.popup__save-btn');
    if (isLoading) {
      saveBtn.textContent = 'Удаление...';
    } else {
      saveBtn.textContent = initialText;
    }
  }

  setFormSubmitHandler(formSubmitHandler) {
    this._formSubmitHandler = formSubmitHandler;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.querySelector(formSelector).addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._formSubmitHandler();
    })
  }
}


import Popup from './Popup.js';
import {formSelector} from '../utils/constants.js';

export default class PopupWithFormSubmit extends Popup {
  constructor({ popupSelector, formSubmitHandler }) {
    super(popupSelector);
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


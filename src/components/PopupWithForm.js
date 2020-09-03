import Popup from './Popup.js';
import { formSelector } from '../utils/constants.js';


export default class PopupWithForm extends Popup {
  constructor({ popupSelector, formSubmitHandler }) {
    super(popupSelector);
    this._formSubmitHandler = formSubmitHandler;
  }

  _getInputValues() {
    this._popupInputList = Array.from(this._popup.querySelectorAll('.popup__input'));
    this._inputValues = {};
    this._popupInputList.forEach((input) => {
      this._inputValues[input.name] = input.value;
    })

    return this._inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.querySelector(formSelector).addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._formSubmitHandler(this._getInputValues());
    })
  }

  close() {
    super.close();
    this._popup.querySelector(formSelector).reset();
  }
}

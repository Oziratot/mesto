import Popup from './Popup.js';
import { popupImage, popupTitle } from '../utils/constants.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
    this._popupImage = popupImage;
    this._popupTitle = popupTitle;
  }

  open(link, name) {
    this._popupImage.src = link;
    this._popupImage.alt = name;
    this._popupTitle.textContent = name;
    super.open();
  }
}

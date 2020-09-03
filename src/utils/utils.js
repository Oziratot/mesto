export function popupOpen(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', popupCloseEsc);
}

export function popupCloseEsc(evt) {
  if (evt.key === 'Escape') {
    popupClose(document.querySelector('.popup_opened'));
  }
}

export function popupCloseOverlay(evt, popup) {
  if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-btn')) {
    popupClose(popup);
  }
}

export function popupClose(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', popupCloseEsc);
}


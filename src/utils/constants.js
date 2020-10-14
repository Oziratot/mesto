export const initialSettings = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

export const cardsGridSelector = '.places-grid';
export const cardsGrid = document.querySelector(cardsGridSelector);
export const profileNameSelector = '.profile__name';
export const profileDescriptionSelector = '.profile__description';
export const popupPhotoSelector = '.popup_modal_type_photo';
export const popupEditSelector = '.popup_modal_type_edit';
export const formEdit = document.querySelector('.popup_modal_type_edit');
export const inputName = formEdit.querySelector('.popup__input_type_name');
export const inputDescription = formEdit.querySelector('.popup__input_type_description');
export const editButton = document.querySelector('.profile__edit-btn');
export const popupAddSelector = '.popup_modal_type_add';
export const addButton = document.querySelector('.profile__add-btn');
export const formAdd = document.querySelector('.popup_modal_type_add')
export const templateSelector = 'places-grid__card';
export const popupImage = document.querySelector('.popup__full-image');
export const popupTitle = document.querySelector('.popup__image-title');
export const popupCloseButtonSelector = '.popup__close-btn';
export const formSelector = '.popup__container';
export const popupAvatarSelector = '.popup_modal_type_avatar';
export const popupConfirmSelector = '.popup_modal_type_confirm';
export const avatarChangeForm = document.querySelector('.popup_modal_type_avatar');
export const profileAvatar = document.querySelector('.profile__avatar');
export const profileAvatarBtn = document.querySelector('.profile__avatar-container');

export const serverUrl = 'https://mesto.nomoreparties.co/v1/cohort-15/';
export const headers = {
  authorization: 'dfe63f2a-8f86-4355-ad0e-f940e143b2d0',
  'Content-Type': 'application/json'
}

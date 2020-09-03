export const initialCards = [
  {
      name: 'Алтай',
      link: 'https://images.unsplash.com/photo-1494791286225-ea86fc957ba7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1947&q=80'
  },
  {
      name: 'Камчатка',
      link: 'https://images.unsplash.com/photo-1577163081390-2ee254a42b2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80'
  },
  {
      name: 'Эльбрус',
      link: 'https://images.unsplash.com/photo-1518277232585-44d47773da22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80'
  },
  {
      name: 'Красноярский край',
      link: 'https://images.unsplash.com/photo-1574000526954-115f018b4bef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'
  },
  {
      name: 'Приморский край',
      link: 'https://images.unsplash.com/photo-1581665611754-08d420f9590f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80'
  },
  {
      name: 'Озеро Эльтон',
      link: 'https://images.unsplash.com/photo-1565746461434-a5100a1d812b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
  }
];

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







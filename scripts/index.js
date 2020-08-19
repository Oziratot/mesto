const initialCards = [
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

const initialSettings = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};


import { Card } from './Card.js';
import { popupOpen, popupCloseOverlay, popupClose } from './utils.js';
import { FormValidator } from './FormValidator.js';


//page variables
const cardsGrid = document.querySelector('.places-grid');
const name = document.querySelector('.profile__name');
const description = document.querySelector('.profile__description');
const popupList = Array.from(document.querySelectorAll('.popup'));
//---------------------------------------------------------------------------

//Add button popup
const addButton = document.querySelector('.profile__add-btn');
const popupAdd = document.querySelector('.popup_modal_type_add');
const saveButtonAddPopup = popupAdd.querySelector('.popup__save-btn');
const formElementAdd = popupAdd.querySelector('.popup__container');
const inputPlaceTitle = popupAdd.querySelector('.popup__input_type_place');
const inputPlaceLink = popupAdd.querySelector('.popup__input_type_image-link');
//---------------------------------------------------------------------------

//Edit button popup
const popupEdit = document.querySelector('.popup_modal_type_edit');
const editButton = document.querySelector('.profile__edit-btn');
const formElementEdit = popupEdit.querySelector('.popup__container');
const inputName = popupEdit.querySelector('.popup__input_type_name');
const inputDescription = popupEdit.querySelector('.popup__input_type_description');
//---------------------------------------------------------------------------


//form validation
const profileFormValidation = new FormValidator(initialSettings, popupEdit);
profileFormValidation.enableValidation();
const addCardFormValidation = new FormValidator(initialSettings, popupAdd);
addCardFormValidation.enableValidation();
//---------------------------------------------------------------------------

//cards functons
function createNewCard(image, title, cardSelector) {
  const card = new Card(image, title, cardSelector);
  const cardElement = card.generateCard();
  return cardElement;
}

initialCards.forEach((item) => {
  cardsGrid.append(createNewCard(item.link, item.name, 'places-grid__card'));
})

function addNewCard(evt) {
  evt.preventDefault();
  const cardImage = inputPlaceLink.value;
  const cardTitle = inputPlaceTitle.value;
  cardsGrid.prepend(createNewCard(cardImage, cardTitle, 'places-grid__card'));
  popupClose(popupAdd);
  inputPlaceLink.value = '';
  inputPlaceTitle.value = '';
  addCardFormValidation.inactivateButton();
}
//---------------------------------------------------------------------------

function inputFill() {
  inputName.value = name.textContent;
  inputDescription.value = description.textContent;
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  name.textContent = inputName.value;
  description.textContent = inputDescription.value;
  popupClose(popupEdit);
}

//event listeners
editButton.addEventListener('click', function() {
  inputFill();
  popupOpen(popupEdit);
});

addButton.addEventListener('click', function() {
  popupOpen(popupAdd);
});

popupList.forEach((popup) => {
  popup.addEventListener('mousedown', function (evt) {
    popupCloseOverlay(evt, popup);
  });
});

//----------------------------------------------------------
inputFill();
formElementEdit.addEventListener('submit', formSubmitHandler);
formElementAdd.addEventListener('submit', addNewCard);




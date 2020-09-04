import '../pages/index.css';

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { UserInfo } from '../components/UserInfo.js';
import { Section } from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import {
  initialCards,
  initialSettings,
  cardsGrid,
  cardsGridSelector,
  profileNameSelector,
  profileDescriptionSelector,
  popupPhotoSelector,
  popupEditSelector,
  inputName,
  inputDescription,
  editButton,
  templateSelector,
  popupAddSelector,
  addButton,
  formEdit,
  formAdd } from '../utils/constants.js'

//creating new card function
function createCard(item) {
  const card = new Card({
    item: item,
    handleCardClick: () => popupPhoto.open(item.link, item.name)
  }, templateSelector);
  const cardElement = card.generateCard();

  return cardElement;
}

//creating popup with image instance and setting event listener
const popupPhoto = new PopupWithImage(popupPhotoSelector);
popupPhoto.setEventListeners();

//creatig initial cards
const initialCardList = new Section({
  items: initialCards,
  renderer: (item) => {
    initialCardList.addItem(createCard(item));
  }
}, cardsGridSelector)
initialCardList.renderCards();

//creating user info class instance
const currentUser = new UserInfo(profileNameSelector, profileDescriptionSelector);

//creating popup edit instance and setting event listener
const popupEdit = new PopupWithForm({
  popupSelector: popupEditSelector,
  formSubmitHandler: (inputValues) => {
    currentUser.setUserInfo(inputValues.name, inputValues.description);
    popupEdit.close();
  }
})
popupEdit.setEventListeners();

//opening popup edit
function popupEditOpen() {
  const currentUserValues = currentUser.getUserInfo();
  console.log(currentUserValues);
  inputName.value = currentUserValues.userName;
  inputDescription.value = currentUserValues.userDescription;
  popupEdit.open();
}

editButton.addEventListener('click', function() {
  popupEditOpen();
})

//creating popup add instance and setting event listener
const popupAdd = new PopupWithForm({
  popupSelector: popupAddSelector,
  formSubmitHandler: (inputValues) => {
    initialCardList.prependItem(createCard(inputValues));
    addCardFormValidation.inactivateButton();
    popupAdd.close();
  }
})
popupAdd.setEventListeners();

//opening popup add
function popupAddOpen() {
  popupAdd.open();
}

addButton.addEventListener('click', function () {
  popupAddOpen();
})

//setting form validation
const profileFormValidation = new FormValidator(initialSettings, formEdit);
profileFormValidation.enableValidation();
const addCardFormValidation = new FormValidator(initialSettings, formAdd);
addCardFormValidation.enableValidation();

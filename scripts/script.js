let page = document.querySelector('.page');
let popup = document.querySelector('.popup');
let formElement = popup.querySelector('.popup__container');
let editButton = document.querySelector('.profile__edit-btn');
let closeButton = page.querySelector('.popup__close-btn');
let inputName = document.querySelector('.popup__input_name');
let inputDescription = document.querySelector('.popup__input_description');
let name = document.querySelector('.profile__name');
let description = document.querySelector('.profile__description');


function popupOpen() {
  popup.classList.add('popup_opened');
  inputName.value = name.textContent;
  inputDescription.value = description.textContent;
}

function popupClose() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  name.textContent = inputName.value;
  description.textContent = inputDescription.value;
  popupClose();
}

editButton.addEventListener('click', popupOpen);
formElement.addEventListener('submit', formSubmitHandler);
closeButton.addEventListener('click', popupClose);

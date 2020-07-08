let page = document.querySelector('.page');
let popup = document.querySelector('.popup');
let formElement = popup.querySelector('.popup__container');
let editButton = document.querySelector('.profile__edit-btn');
let closeButton = page.querySelector('.popup__close-btn');
console.log('form found')

function popupOpen() {
  let inputName = document.querySelector('.popup__input_name');
  let currentName = document.querySelector('.profile__name').textContent;
  let inputDescription = document.querySelector('.popup__input_description');
  let currentDescription = document.querySelector('.profile__description').textContent;
  popup.classList.add('popup_opened');
  inputName.setAttribute('value', currentName);
  inputDescription.setAttribute('value', currentDescription);
}

function popupClose() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  let inputName = page.querySelector('.popup__input_name').value;
  let inputDescription = page.querySelector('.popup__input_description').value;
  let newName = page.querySelector('.profile__name');
  let newDescription = page.querySelector('.profile__description');
  newName.textContent = inputName;
  newDescription.textContent = inputDescription;
  popupClose();
}

editButton.addEventListener('click', popupOpen);
formElement.addEventListener('submit', formSubmitHandler);
closeButton.addEventListener('click', popupClose);

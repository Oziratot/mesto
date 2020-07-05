let page = document.querySelector('.page');
let popup = page.querySelector('.popup');
let editButton = page.querySelector('.profile__edit-btn');
let closeButton = page.querySelector('.popup__close-btn');
let saveButton = page.querySelector('.popup__save-btn');

function popupOpen() {
  let inputName = page.querySelector('.popup__input_name');
  let currentName = page.querySelector('.profile__name').textContent;
  let inputDescription = page.querySelector('.popup__input_description');
  let currentDescription = page.querySelector('.profile__description').textContent;
  popup.classList.add('popup_opened');
  inputName.setAttribute('value', currentName);
  inputDescription.setAttribute('value', currentDescription);
}

function popupClose() {
  popup.classList.remove('popup_opened');
}

function popupSave() {
  let inputName = page.querySelector('.popup__input_name').value;
  let inputDescription = page.querySelector('.popup__input_description').value;
  let newName = page.querySelector('.profile__name');
  let newDescription = page.querySelector('.profile__description');
  newName.textContent = inputName;
  newDescription.textContent = inputDescription;
  popupClose();
}

editButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);
saveButton.addEventListener('click', popupSave);


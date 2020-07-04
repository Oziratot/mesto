let page = document.querySelector('.page');
let editButton = page.querySelector('.profile__rectangle');

function popupOpen() {
  let popup = page.querySelector('.popup');
  popup.classList.add('popup_opened');
}

editButton.addEventListener('click', popupOpen);

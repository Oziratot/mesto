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

//page variables
const page = document.querySelector('.page');
const cardsGrid = document.querySelector('.places-grid');
const name = document.querySelector('.profile__name');
const description = document.querySelector('.profile__description');
const cardTemplate = document.querySelector('#places-grid__card').content;
const formElements = Array.from(document.querySelectorAll('.popup'));
//---------------------------------------------------------------------------

//photo popup
const popupPhoto = document.querySelector('.popup_modal_type_photo');
const popupImage = popupPhoto.querySelector('.popup__full-image');
const popupTitle = popupPhoto.querySelector('.popup__image-title');

//Add button popup
const addButton = document.querySelector('.profile__add-btn');
const popupAdd = document.querySelector('.popup_modal_type_add');
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

//cards functons
function createCard(cardImage, cardTitle) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardElementImage = cardElement.querySelector('.places-grid__image');
  const cardElementTitle = cardElement.querySelector('.places-grid__text');

  cardElementImage.src = cardImage;
  cardElementTitle.textContent = cardTitle;
  cardElementImage.alt = cardElementTitle.textContent;

  //deleting card
  cardElement.querySelector('.places-grid__delete-btn').addEventListener('click', function(evt) {
    evt.target.closest('.places-grid__element').remove();
  })

  //like button
  cardElement.querySelector('.places-grid__like-btn').addEventListener('click', function(evt) {
    evt.target.classList.toggle('places-grid__like-btn_active');
  })

  //full image
  cardElementImage.addEventListener('click', function() {
    popupImage.src = cardImage;
    popupTitle.textContent = cardTitle;
    popupOpen(popupPhoto);
  })

  return cardElement;
}

initialCards.forEach(function (card) {
  cardsGrid.append(createCard(card.link, card.name));
})


function addNewCard(evt) {
  evt.preventDefault();
  const cardImage = inputPlaceLink.value;
  const cardTitle = inputPlaceTitle.value;
  cardsGrid.prepend(createCard(cardImage, cardTitle));
  popupClose(popupAdd);
  inputPlaceLink.value = '';
  inputPlaceTitle.value = '';
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


function popupOpen(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', popupCloseEsc);
}

function popupClose(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', popupCloseEsc);
}

function popupCloseOverlay(evt, popup) {
  if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-btn')) {
    popupClose(popup);
  }
}

function popupCloseEsc(evt) {
  if (evt.key === 'Escape') {
    formElements.forEach(function (form) {
      if (form.classList.contains('popup_opened')) {
        popupClose(form);
      }
    })
  }
}

editButton.addEventListener('click', function() {
  popupOpen(popupEdit);
});

addButton.addEventListener('click', function() {
  popupOpen(popupAdd);
});

popupPhoto.addEventListener('click', function (evt) {
  popupCloseOverlay(evt, popupPhoto);
})

popupAdd.addEventListener('click', function (evt) {
  popupCloseOverlay(evt, popupAdd);
})

popupEdit.addEventListener('click', function (evt) {
  popupCloseOverlay(evt, popupEdit);
})

//----------------------------------------------------------
inputFill();
formElementEdit.addEventListener('submit', formSubmitHandler);
formElementAdd.addEventListener('submit', addNewCard);



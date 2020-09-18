import '../pages/index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithFormSubmit from '../components/PopupWithFormSubmit.js';
import Api from '../components/Api.js';
import {
  initialSettings,
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
  formAdd,
  popupAvatarSelector,
  profileAvatar,
  avatarChangeForm,
  headers,
  serverUrl,
  profileAvatarBtn,
  popupConfirmSelector} from '../utils/constants.js'


//creating user info class instance
const currentUser = new UserInfo(profileNameSelector, profileDescriptionSelector);

//creating api instance
const api = new Api({
  serverUrl: serverUrl,
  headers: headers
});


//initial page loading
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([data, cards]) => {

    //loading user info
    currentUser.setUserInfo(data.name, data.about, data._id);
    profileAvatar.src = data.avatar;

    //loading initial cards
    cards.forEach((card) => {
      initialCardList.addItem(createCard(card, currentUser.getUserInfo().userId));
    })
  })
  .catch((err) => {
    console.log(err);
  })

//creating new card function and getting initial card list
function createCard(item, userId) {
  const card = new Card({
    item: item,
    handleCardClick: () => popupPhoto.open(item.link, item.name),

    handleLikeClick: () => {
      if (!card.isLiked()) {
        api.setLike(item._id)
          .then((data) => {
            card.handleLike(data.likes.length);
          })
          .catch((err) => {
            console.log(err);
          })
      } else {
        api.deleteLike(item._id)
          .then((data) => {
            card.handleLike(data.likes.length);
          })
          .catch((err) => {
            console.log(err);
          })
      }
    },
    handleDeleteClick: () => {
      const popupConfirm = new PopupWithFormSubmit({
        popupSelector: popupConfirmSelector,
        formSubmitHandler: () => {
          popupConfirm.popupLoader(true, 'Да');
          api.deleteCard(item._id)
            .catch((err) => {
              console.log(err);
            })
          card.deleteCard();
          popupConfirm.close();
          popupConfirm.popupLoader(false, 'Да');
        }
      })
      console.log(popupConfirm);
      popupConfirm.open();
      popupConfirm.setEventListeners();
    }
  }, userId, templateSelector);

  const cardElement = card.generateCard();
  return cardElement;
}

const initialCardList = new Section({
  items: {},
  renderer: (item) => {
    initialCardList.addItem(createCard(item, userId));
  }
}, cardsGridSelector);


//creating popup with image instance and setting event listener
const popupPhoto = new PopupWithImage(popupPhotoSelector);
popupPhoto.setEventListeners();


//creating popup edit instance and setting event listener
const popupEdit = new PopupWithForm({
  popupSelector: popupEditSelector,
  formSubmitHandler: (inputValues) => {
    popupEdit.popupLoader(true, 'Сохранить');
    api.setUserInfo(inputValues)
      .then((data) => {
        currentUser.setUserInfo(data.name, data.about, data._id);
        popupEdit.close();
        popupEdit.popupLoader(false, 'Сохранить');
      })
      .catch((err) => {
        console.log(err);
      })
  }
})
popupEdit.setEventListeners();

//opening function for popup edit
function popupEditOpen() {
  const currentUserValues = currentUser.getUserInfo();
  inputName.value = currentUserValues.userName;
  inputDescription.value = currentUserValues.userDescription;
  popupEdit.open();
}

//creating popup add instance and setting event listener
const popupAdd = new PopupWithForm({
  popupSelector: popupAddSelector,
  formSubmitHandler: (inputValues) => {
    popupAdd.popupLoader(true, 'Создать')
    api.addNewCard(inputValues)
      .then((data) => {
        initialCardList.prependItem(createCard(data, currentUser.getUserInfo().userId));
      })
      .catch((err) => {
        console.log(err);
      })
    addCardFormValidation.inactivateButton();
    popupAdd.close();
    popupAdd.popupLoader(false, 'Создать');
  }
})
popupAdd.setEventListeners();


//creating popup avatar instance and setting event listener
const popupAvatar = new PopupWithForm({
  popupSelector: popupAvatarSelector,
  formSubmitHandler: (inputValues) => {
    api.setUserAvatar(inputValues.link)
      .then((res) => {
        profileAvatar.src = res.avatar;
      })
      .catch((err) => {
        console.log(err);
      })
    popupAvatar.close();
  }
});
popupAvatar.setEventListeners();


//adding event listeners
profileAvatarBtn.addEventListener('click', () => popupAvatar.open());
editButton.addEventListener('click', function() {
  popupEditOpen();
})
addButton.addEventListener('click', () => popupAdd.open());

//setting form validation
const profileFormValidation = new FormValidator(initialSettings, formEdit);
profileFormValidation.enableValidation();
const addCardFormValidation = new FormValidator(initialSettings, formAdd);
addCardFormValidation.enableValidation();
const avatarFormValidation = new FormValidator(initialSettings, avatarChangeForm);
avatarFormValidation.enableValidation();


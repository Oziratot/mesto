const initialSettings = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(initialSettings.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(initialSettings.errorClass);
}

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(initialSettings.inputErrorClass);
  errorElement.classList.remove(initialSettings.errorClass);
  errorElement.textContent = '';
}

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  }
  else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButton = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(initialSettings.inactiveButtonClass);
  }
  else {
    buttonElement.classList.remove(initialSettings.inactiveButtonClass);
  };
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(initialSettings.inputSelector));
  const buttonElement = formElement.querySelector(initialSettings.submitButtonSelector);
  toggleButton(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButton(inputList, buttonElement);
    });
  });
};

const enableValidation = (initialSettings) => {
  const formList = Array.from(document.querySelectorAll(initialSettings.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formElement);
  });
};

enableValidation(initialSettings);



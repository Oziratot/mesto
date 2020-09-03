export class UserInfo {
  constructor(nameSelector, descriptionSelector) {
    this._nameSelector = nameSelector;
    this._descriptionSelector = descriptionSelector;
    this._nameElement = document.querySelector(this._nameSelector);
    this._descriptionElement = document.querySelector(this._descriptionSelector);
  }

  getUserInfo() {
    const userInfo = {
      userName: this._nameElement.textContent,
      userDescription: this._descriptionElement.textContent
    }

    return userInfo;
  }

  setUserInfo(name, description) {
    this._nameElement.textContent = name;
    this._descriptionElement.textContent = description;
  }
}

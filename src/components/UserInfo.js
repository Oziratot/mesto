export default class UserInfo {
  constructor(nameSelector, descriptionSelector) {
    this._nameSelector = nameSelector;
    this._descriptionSelector = descriptionSelector;
    this._nameElement = document.querySelector(this._nameSelector);
    this._descriptionElement = document.querySelector(this._descriptionSelector);
  }

  getUserInfo() {
    const userInfo = {
      userName: this._nameElement.textContent,
      userDescription: this._descriptionElement.textContent,
      userId: this._id
    }

    return userInfo;
  }

  setUserInfo(name, about, _id) {
    this._nameElement.textContent = name;
    this._descriptionElement.textContent = about;
    this._id = _id;
  }
}

/* eslint-disable no-underscore-dangle */
export class User {
  private _id

  private _username

  private _googleId

  private _avatarUrl

  private _email

  constructor(id: string, username: string, googleId: string, avatarUrl: string, email: string) {
    this._id = id
    this._username = username
    this._googleId = googleId
    this._avatarUrl = avatarUrl
    this._email = email
  }

  public get id() {
    return this._id
  }

  public get username() {
    return this._username
  }

  public set username(username: string) {
    this._username = username
  }

  public get googleId() {
    return this._googleId
  }

  public set googleId(googleId: string) {
    this._googleId = googleId
  }

  public get avatarUrl() {
    return this._avatarUrl
  }

  public set avatarUrl(avatarUrl: string) {
    this._avatarUrl = avatarUrl
  }

  public get email() {
    return this._email
  }

  public set email(email: string) {
    this._email = email
  }
}

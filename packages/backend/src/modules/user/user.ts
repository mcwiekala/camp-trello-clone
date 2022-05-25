/* eslint-disable no-underscore-dangle */
export class User {
  _id: string
  username: string
  googleId: string
  avatarUrl: string
  email: string

  constructor(id: string, username: string, googleId: string, avatarUrl: string, email: string) {
    this._id = id
    this.username = username
    this.googleId = googleId
    this.avatarUrl = avatarUrl
    this.email = email
  }
}

/* eslint-disable no-underscore-dangle */
export class User {
  private _id: string

  private _username: string

  private _passwordHash: string

  private _avatarId: number

  private _dashboards: unknown[]

  constructor(
    id: string,
    username: string,
    passwordHash: string,
    avatarId: number,
    dashboards: unknown[]
  ) {
    this._id = id
    this._username = username
    this._passwordHash = passwordHash
    this._avatarId = avatarId
    this._dashboards = dashboards
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

  public get passwordHash() {
    return this._passwordHash
  }

  public set passwordHash(passwordHash: string) {
    this._passwordHash = passwordHash
  }

  public get avatarId() {
    return this._avatarId
  }

  public set avatarId(avatarId: number) {
    this._avatarId = avatarId
  }

  public get dashboards() {
    return this._dashboards
  }

  public set dashboards(dashboards: unknown[]) {
    this._dashboards = dashboards
  }
}

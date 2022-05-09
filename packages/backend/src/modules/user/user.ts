/* eslint-disable no-underscore-dangle */
export class User {
  private _id

  private _username

  private _passwordHash

  private _avatarId

  private _memberOfDashboards

  constructor(
    id: string,
    username: string,
    passwordHash: string,
    avatarId: number,
    memberOfDashboards: string[]
  ) {
    this._id = id
    this._username = username
    this._passwordHash = passwordHash
    this._avatarId = avatarId
    this._memberOfDashboards = memberOfDashboards
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

  public get memberOfDashboards() {
    return this._memberOfDashboards
  }

  public set memberOfDashboards(memberOfDashboards: string[]) {
    this._memberOfDashboards = memberOfDashboards
  }
}

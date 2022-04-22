export class Task {
  private _id: string
  private _title: string

  constructor(id: string, title: string) {
    this._id = id
    this._title = title
  }

  public get id() {
    return this._id
  }

  public get title() {
    return this._title
  }

  // TODO:
  // description: String,
  // imageCoverId: String,
  // attachments: [
  // comments: [
}

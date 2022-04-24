export class Attachment {
  private _id: string
  private _fileName: string
  private _fileNameHash: string
  private _addedDate: Date

  constructor(id: string, fileName: string, fileNameHash: string, addedDate: Date) {
    this._id = id
    this._fileName = fileName
    this._fileNameHash = fileNameHash
    this._addedDate = addedDate
  }

  public get id() {
    return this._id
  }

  public get fileName() {
    return this._fileName
  }

  public get fileNameHash() {
    return this._fileNameHash
  }

  public get addedDate() {
    return this._addedDate
  }
}

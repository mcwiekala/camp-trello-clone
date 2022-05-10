export class Attachment {
  private readonly _id: string
  private _fileName: string
  private _fileNameHash: string
  private _addedDate: Date
  private _taskId: string

  constructor(id: string, fileName: string, fileNameHash: string, addedDate: Date, taskId: string) {
    this._id = id
    this._fileName = fileName
    this._fileNameHash = fileNameHash
    this._addedDate = addedDate
    this._taskId = taskId
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

  public get taskId() {
    return this._taskId
  }
}

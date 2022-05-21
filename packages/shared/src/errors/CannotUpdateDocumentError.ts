import DocumentError from './DocumentError'

export default class CannotUpdateDocumentError<PayloadType = unknown> extends DocumentError {
  public readonly id: string
  public readonly payload: PayloadType
  constructor(documentName: string, id: string, payload: PayloadType) {
    const errorMessage = `Cannot update ${documentName} with id: ${id}`
    super(documentName, errorMessage)
    this.id = id
    this.payload = payload
    Object.setPrototypeOf(this, CannotUpdateDocumentError.prototype)
  }
}

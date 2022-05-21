import DocumentError from './DocumentError'

export default class CannotCreateDocumentError<PayloadType = unknown> extends DocumentError {
  public readonly payload: PayloadType
  constructor(documentName: string, payload: PayloadType) {
    const errorMessage = `Cannot create ${documentName}`
    super(documentName, errorMessage)
    this.payload = payload
    Object.setPrototypeOf(this, CannotCreateDocumentError.prototype)
  }
}

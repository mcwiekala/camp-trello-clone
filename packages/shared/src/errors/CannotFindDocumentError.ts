import DocumentError from './DocumentError'

export default class CannotFindDocumentError extends DocumentError {
  public readonly id: string
  constructor(documentName: string, id: string) {
    const errorMessage = `Cannot find ${documentName} with id: ${id}`
    super(documentName, errorMessage)
    this.id = id
    Object.setPrototypeOf(this, CannotFindDocumentError.prototype)
  }
}

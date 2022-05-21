import DocumentError from './DocumentError'

export default class CannotDeleteDocumentError extends DocumentError {
  public readonly id: string
  constructor(documentName: string, id: string) {
    const errorMessage = `Cannot delete ${documentName} with id: ${id}`
    super(documentName, errorMessage)
    this.id = id
    Object.setPrototypeOf(this, CannotDeleteDocumentError.prototype)
  }
}

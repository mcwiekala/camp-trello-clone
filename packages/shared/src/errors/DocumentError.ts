export default class DocumentError extends Error {
  public readonly documentName: string
  constructor(documentName: string, errorMessage: string) {
    super(errorMessage)
    this.documentName = documentName
    Object.setPrototypeOf(this, DocumentError.prototype)
  }
}

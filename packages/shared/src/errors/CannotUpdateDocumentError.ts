export default class CannotUpdateDocumentError extends Error {
  constructor(msg: string) {
    super(msg)
    Object.setPrototypeOf(this, CannotUpdateDocumentError.prototype)
  }
}

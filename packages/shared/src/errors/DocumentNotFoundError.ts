export default class DocumentNotFoundError extends Error {
  constructor(msg: string) {
    super(msg)
    Object.setPrototypeOf(this, DocumentNotFoundError.prototype)
  }
}

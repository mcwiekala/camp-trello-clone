import { datatype } from '@faker-js/faker'

class GenerateId {
  private id: string

  constructor() {
    this.id = datatype.uuid()
  }

  get getId() {
    return this.id
  }
}

export default GenerateId

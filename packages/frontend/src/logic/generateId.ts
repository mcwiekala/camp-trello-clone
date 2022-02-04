import faker from '@faker-js/faker'

class GenerateId {
  private id: string

  constructor() {
    this.id = faker.datatype.uuid()
  }

  get getId() {
    return this.id
  }
}

export default GenerateId

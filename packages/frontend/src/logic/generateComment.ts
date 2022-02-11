import faker from '@faker-js/faker'
import RandomUser from './randomUser'
import UserType from '../types/user'

class GenerateComment {
  private readonly id: string

  private readonly userData: UserType

  private readonly textContent: string

  private readonly date: Date

  constructor() {
    this.id = faker.datatype.uuid()
    this.userData = new RandomUser().userData
    this.textContent = faker.lorem.lines(3)
    this.date = faker.date.past()
  }

  get getComment() {
    return {
      id: this.id,
      userData: this.userData,
      textContent: this.textContent,
      date: this.date
    }
  }
}
export default GenerateComment

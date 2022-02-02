import faker from '@faker-js/faker'

export type RandomUserType = {
  id: string

  firstName: string

  lastName: string

  role: string

  profilePictureURL: string
}

class RandomUser {
  private readonly id: string

  private readonly firstName: string

  private readonly lastName: string

  private readonly role: string

  private readonly profilePictureURL: string

  constructor() {
    this.firstName = faker.name.firstName()
    this.lastName = faker.name.lastName()
    this.id = faker.datatype.uuid()
    this.role = RandomUser.generateRole()
    this.profilePictureURL = `https://avatars.dicebear.com/api/human/${this.id}.svg`
  }

  get getUser() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      id: this.id,
      role: this.role,
      profilePictureURL: this.profilePictureURL
    }
  }

  private static generateRole() {
    const num = parseInt(String(Math.random() * 10), 10)
    if (num === 5) {
      return 'Admin'
    }
    return 'User'
  }
}

export default RandomUser

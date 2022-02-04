import faker from '@faker-js/faker'

export type RandomUserType = {
  id: string

  username: string

  role: string

  profilePictureURL: string
}

class RandomUser {
  private readonly id: string

  private readonly username: string

  private readonly role: string

  private readonly profilePictureURL: string

  constructor() {
    this.username = `${faker.name.firstName()} ${faker.name.lastName()}`
    this.id = faker.datatype.uuid()
    this.role = RandomUser.generateRole()
    this.profilePictureURL = `https://avatars.dicebear.com/api/human/${this.id}.svg`
  }

  get getUser() {
    return {
      username: this.username,
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

import faker from '@faker-js/faker'
import { UserDTO } from 'shared'

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

  get userData(): UserDTO {
    return {
      username: this.username,
      id: this.id,
      // role: this.role,
      avatarUrl: this.profilePictureURL,
      // TODO
      googleId: '123',
      email: 'a@o2.pl'
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

import faker from '@faker-js/faker'

class RandomUser {
  constructor() {
    this.firstName = faker.name.firstName()
    this.surname = faker.name.lastName()
    this.uuid = faker.datatype.uuid()
    this.role = this.generateRole()
    this.profilePictureURL = `https://avatars.dicebear.com/api/human/${this.uuid}.svg`
  }

  getUser = () => ({
    firstName: this.firstName,
    surname: this.surname,
    uuid: this.uuid,
    role: this.role,
    num: this.num,
    profilePictureURL: this.profilePictureURL
  })

  generateRole() {
    this.num = parseInt(Math.random(9) * 10, 10)
    if (this.num === 5) {
      return 'Admin'
    }
    return 'User'
  }
}

export default RandomUser

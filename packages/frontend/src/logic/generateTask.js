import faker from '@faker-js/faker'
import GenerateAttachment from './generateAttachment.js'

class GenerateTask {
  constructor(ListOfUsers) {
    this.uuid = faker.datatype.uuid()
    this.listOfUsers = ListOfUsers
    this.title = faker.lorem.sentence()
    this.description = faker.lorem.paragraph()
    this.attachment = new GenerateAttachment().getAttachment()
    this.assigneeList = this.getAssigneeList()
    this.imageCover = this.getImageCover()
  }

  getAssigneeList() {
    const randomList = faker.helpers.shuffle(this.listOfUsers)
    const numberOfAssignee = Math.floor(Math.random() * (this.listOfUsers.length - 1)) + 1
    const assigneeList = []
    for (let i = 0; i < numberOfAssignee; i += 1) {
      assigneeList.push(randomList[i])
    }
    return assigneeList
  }

  getImageCover() {
    const isImageCover = Math.random() > 0.5
    if (isImageCover) {
      return `https://picsum.photos/seed/${this.uuid}/300/200`
    }
    return null
  }

  getTask = () => ({
    uuid: this.uuid,
    title: this.title,
    description: this.description,
    attachment: this.attachment,
    assigneeList: this.assigneeList,
    imageCover: this.imageCover
  })
}

export default GenerateTask

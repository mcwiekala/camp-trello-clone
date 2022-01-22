import faker from '@faker-js/faker'
import GenerateAttachment from './generateAttachment.js'

class GenerateTask {
  constructor(ListOfUsers) {
    this.listOfUsers = ListOfUsers
    this.title = faker.lorem.sentence()
    this.description = faker.lorem.paragraph()
    this.attachment = new GenerateAttachment().getAttachment()
    this.assigneeList = this.getAssigneeList()
  }

  getAssigneeList() {
    const randomList = faker.helpers.shuffle(this.listOfUsers)
    const numerOfAssignee = Math.floor(Math.random() * (this.listOfUsers.length - 1)) + 1
    const assigneeList = []
    for (let i = 0; i < numerOfAssignee; i += 1) {
      this.assigneeListt.push(randomList[i])
    }
    return assigneeList
  }

  getTask = () => ({
    title: this.title,
    description: this.description,
    attachment: this.attachment,
    assigneeList: this.assigneeList
  })
}

export default GenerateTask

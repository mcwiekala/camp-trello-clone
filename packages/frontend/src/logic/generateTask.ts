import faker from '@faker-js/faker'
import { AttachmentDTO, TaskDTO, UserDTO } from 'shared'
import GenerateAttachment from './generateAttachment'
import GenerateId from './generateId'
import GenerateImage from './generateImage'
import AttachmentType from '../types/attachment'
import UserType from '../types/user'

class GenerateTask {
  private id: string

  private imageCoverId: string

  private listOfUsers: UserDTO[]

  private title: string

  private description: string

  private attachments: AttachmentDTO[]

  private assigneeList: UserDTO[]

  constructor(ListOfUsers: UserDTO[]) {
    this.id = new GenerateId().getId
    this.listOfUsers = ListOfUsers
    this.title = faker.lorem.sentence()
    this.description = faker.lorem.paragraph()
    this.attachments = [new GenerateAttachment().getAttachment]
    this.assigneeList = this.getAssigneeList()
    this.imageCoverId = this.getImageCover()
  }

  private getAssigneeList() {
    const randomList = faker.helpers.shuffle(this.listOfUsers)
    const numberOfAssignee = Math.floor(Math.random() * (this.listOfUsers.length - 1)) + 1
    const assigneeList = []
    for (let i = 0; i < numberOfAssignee; i += 1) {
      assigneeList.push(randomList[i])
    }
    return assigneeList
  }

  private getImageCover() {
    // const isImageCover = Math.random() > 0.5
    // if (isImageCover) {
    return new GenerateImage(this.id).getImage
    // }
    // return null
  }

  get taskData(): TaskDTO {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      attachments: this.attachments,
      assigneeList: this.assigneeList,
      imageCoverId: this.imageCoverId
    }
  }
}

export default GenerateTask

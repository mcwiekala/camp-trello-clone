import faker from '@faker-js/faker'
import { UserDTO } from 'shared'
import GenerateAttachment from './generateAttachment'
import GenerateId from './generateId'
import GenerateImage from './generateImage'
import AttachmentType from '../types/attachment'

class GenerateTask {
  private id: string

  private imageCoverURL: string | null

  private listOfUsers: UserDTO[]

  private title: string

  private description: string

  private attachment: AttachmentType[]

  private assigneeList: UserDTO[]

  constructor(ListOfUsers: UserDTO[]) {
    this.id = new GenerateId().getId
    this.listOfUsers = ListOfUsers
    this.title = faker.lorem.sentence()
    this.description = faker.lorem.paragraph()
    this.attachment = [new GenerateAttachment().getAttachment]
    this.assigneeList = this.getAssigneeList()
    this.imageCoverURL = this.getImageCover()
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
    const isImageCover = Math.random() > 0.5
    if (isImageCover) {
      return new GenerateImage(this.id).getImage
    }
    return null
  }

  get taskData() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      attachment: this.attachment,
      assigneeList: this.assigneeList,
      imageCoverURL: this.imageCoverURL
    }
  }
}

export default GenerateTask

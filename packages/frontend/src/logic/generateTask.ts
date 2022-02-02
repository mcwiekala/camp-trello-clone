import faker from '@faker-js/faker'
import GenerateAttachment, { GenerateAttachmentType } from './generateAttachment'
import { RandomUserType } from './randomUser'
import { GenerateCommentType } from './generateComment'

export type GenerateTaskType = {
  id: string
  imageCoverURL: string
  title: string
  description: string
  attachment: GenerateAttachmentType[]
  assigneeList: RandomUserType[]
}

class GenerateTask {
  private id: string

  private imageCoverURL: string | null

  private listOfUsers: RandomUserType[]

  private title: string

  private description: string

  private attachment: GenerateAttachmentType[]

  private assigneeList: RandomUserType[]

  constructor(ListOfUsers: RandomUserType[]) {
    this.id = faker.datatype.uuid()
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
      return `https://picsum.photos/seed/${this.id}/300/200`
    }
    return null
  }

  get getTask() {
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

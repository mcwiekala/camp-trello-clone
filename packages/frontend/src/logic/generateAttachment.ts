import faker from '@faker-js/faker'
import { AttachmentDTO } from 'shared'

class GenerateAttachment {
  private fileName!: string

  private itemUrl!: string

  private addedDate: Date

  private id: string

  constructor() {
    this.generateAttachment()
    this.addedDate = faker.date.past()
    this.id = faker.datatype.uuid()
  }

  get getAttachment(): AttachmentDTO {
    return {
      taskId: '123',
      fileName: this.fileName,
      // itemUrl: this.itemUrl,
      addedDate: this.addedDate,
      id: this.id
    }
  }

  private generateAttachment() {
    const isAttachmentWithImage = Math.random() > 0.5
    if (isAttachmentWithImage) {
      this.fileName = faker.system.commonFileName('jpg')
      this.itemUrl = `https://picsum.photos/seed/${this.fileName}/300/200`
    } else {
      const url = faker.internet.url()
      this.fileName = faker.system.fileName()
      this.itemUrl = `${url}/${this.fileName}`
    }
  }
}

export default GenerateAttachment

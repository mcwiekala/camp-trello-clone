import faker from '@faker-js/faker'

export type GenerateAttachmentType = {
  fileName: string

  itemUrl: string

  date: Date

  id: string
}

class GenerateAttachment {
  private fileName!: string

  private itemUrl!: string

  private date: Date

  private id: string

  constructor() {
    this.generateAttachment()
    this.date = faker.date.past()
    this.id = faker.datatype.uuid()
  }

  get getAttachment() {
    return {
      fileName: this.fileName,
      itemUrl: this.itemUrl,
      date: this.date,
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

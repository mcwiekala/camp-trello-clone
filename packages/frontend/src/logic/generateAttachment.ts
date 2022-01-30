import faker from '@faker-js/faker'

class GenerateAttachment {
  fileName!: string

  itemURL!: string

  date: Date

  id: string

  constructor() {
    this.generateAttachment()
    this.date = faker.date.past()
    this.id = faker.datatype.uuid()
  }

  getAttachment = () => ({
    itemUrl: this.itemURL,
    fileName: this.fileName,
    date: this.date,
    id: this.id
  })

  generateAttachment() {
    const isAttachmentWithImage = Math.random() > 0.5
    if (isAttachmentWithImage) {
      this.fileName = faker.system.commonFileName('jpg')
      this.itemURL = `https://picsum.photos/seed/${this.fileName}/300/200`
    } else {
      const url = faker.internet.url()
      this.fileName = faker.system.fileName()
      this.itemURL = `${url}/${this.fileName}`
    }
  }
}

export default GenerateAttachment

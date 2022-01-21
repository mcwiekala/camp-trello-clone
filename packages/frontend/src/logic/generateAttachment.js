import faker from '@faker-js/faker'

class GenerateAttachment {
  constructor() {
    this.generateAttachment()
    this.date = faker.date.past()
  }

  getAttachment = () => ({
    itemURL: this.itemURL,
    fileName: this.fileName,
    date: this.date
  })

  generateAttachment() {
    const isAttachmentWithImage = Math.random() > 0.5
    if (isAttachmentWithImage) {
      this.fileName = faker.system.commonFileName('jpg')
      this.itemURL = 'https://picsum.photos/200/300'
    } else {
      this.fileName = faker.system.fileName()
      this.url = faker.internet.url()
      this.itemURL = `${this.url}/${this.fileName}`
    }
  }
}

export default GenerateAttachment

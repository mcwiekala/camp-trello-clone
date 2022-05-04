import fsPromises from 'fs/promises'
import { CreateAttachmentDTO } from 'shared'
import { Attachment } from './attachment'
import AttachmentModel from './attachment.model'

export class AttachmentRepository {
  private readonly _attachmentModel

  constructor(attachmentModel: any) {
    this._attachmentModel = attachmentModel
  }

  async createAttachment(createAttachment: CreateAttachmentDTO): Promise<Attachment> {
    const savedAttachment = await this._attachmentModel.create({
      taskId: createAttachment.taskId,
      fileName: createAttachment.file.originalname,
      fileNameHash: createAttachment.file.filename,
      addedDate: new Date()
    })
    return savedAttachment
  }

  async findById(id: string): Promise<Attachment> {
    const attachment: Attachment = await this._attachmentModel.findById(id)
    return attachment
  }

  async deleteById(id: string): Promise<Attachment | null> {
    const file = await this._attachmentModel.findById(id)
    if (!file) {
      return null
    }
    await fsPromises.unlink(`uploads/${file.fileNameHash}`)
    const deletedAttachment = await this._attachmentModel.findByIdAndDelete(id)
    return deletedAttachment
  }
}

const attachmentRepository = new AttachmentRepository(AttachmentModel)
export { attachmentRepository }

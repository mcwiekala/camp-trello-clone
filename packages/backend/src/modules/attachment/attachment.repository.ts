import fsPromises from 'fs/promises'
import { CreateAttachmentDTO, AttachmentDTO } from 'shared'
import { Attachment } from './Attachment'
import { fileNameHash } from '../../helpers/fileNameHash'
import { Repository } from '../../application/Repository'
import AttachmentModel from './attachments.model'

export class AttachmentRepository implements Repository<AttachmentDTO> {
  private readonly _attachmentModel

  constructor(attachmentModel: any) {
    this._attachmentModel = attachmentModel
  }

  async create(dto: CreateAttachmentDTO): Promise<Attachment> {
    const { originalname } = dto
    const attachment = {
      fileName: originalname,
      addedDate: new Date(),
      fileNameHash: fileNameHash(originalname)
    }
    const newAttachment = await this._attachmentModel.create(attachment)
    return newAttachment
  }

  async getOne(id: string): Promise<Attachment> {
    const attachment: Attachment = await this._attachmentModel.findById(id)
    return attachment
  }

  async delete(id: string): Promise<Attachment> {
    const file = await this._attachmentModel.findById(id)
    await fsPromises.unlink(`uploads/${file.fileNameHash}`)
    const deletedAttachment = await this._attachmentModel.findByIdAndDelete(id)
    return deletedAttachment
  }
}

const attachmentRepository = new AttachmentRepository(AttachmentModel)
export { attachmentRepository }

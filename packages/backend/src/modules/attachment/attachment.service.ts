import { CreateAttachmentDTO } from 'shared'
import { Attachment } from './Attachment'
import { AttachmentRepository, attachmentRepository } from './attachment.repository'

export class AttachmentService {
  private readonly _attachmentRepository: AttachmentRepository

  constructor(attachmentRepository: AttachmentRepository) {
    this._attachmentRepository = attachmentRepository
  }

  async create(dto: CreateAttachmentDTO): Promise<Attachment> {
    const savedAttachment: Attachment = await this._attachmentRepository.create(dto)
    return savedAttachment
  }

  async getOne(_id: string): Promise<Attachment> {
    return this._attachmentRepository.getOne(_id)
  }

  async delete(_id: string): Promise<Attachment> {
    return this._attachmentRepository.delete(_id)
  }
}

const attachmentService = new AttachmentService(attachmentRepository)
export { attachmentService }

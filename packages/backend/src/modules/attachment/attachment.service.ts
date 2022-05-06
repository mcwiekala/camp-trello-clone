import { CreateAttachmentCommand } from 'shared'
import crypto from 'crypto'
import multer from 'multer'
import { Attachment } from './attachment'
import { AttachmentRepository, attachmentRepository } from './attachment.repository'

export class AttachmentService {
  private readonly _attachmentRepository: AttachmentRepository

  constructor(attachmentRepository: AttachmentRepository) {
    this._attachmentRepository = attachmentRepository
  }

  async createAttachment(createAttachment: CreateAttachmentCommand): Promise<Attachment> {
    const savedAttachment: Attachment = await this._attachmentRepository.create(createAttachment)
    return savedAttachment
  }

  async findById(_id: string): Promise<Attachment> {
    return this._attachmentRepository.findById(_id)
  }

  async deleteById(_id: string): Promise<Attachment | null> {
    return this._attachmentRepository.deleteById(_id)
  }
}

function fileNameHash(originalname: string) {
  const newName = `${new Date()}${originalname}`
  const hash = crypto.createHash('md5').update(newName).digest('hex')
  return hash
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, { originalname }, cb) => {
    cb(null, fileNameHash(originalname))
  }
})

export const upload = multer({ storage })

const attachmentService = new AttachmentService(attachmentRepository)
export { attachmentService }

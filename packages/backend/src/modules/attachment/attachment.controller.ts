import express from 'express'
import { AttachmentDTO, CreateAttachmentCommand } from 'shared'
import { Attachment } from './attachment'
import { AttachmentService, attachmentService } from './attachment.service'
import { AttachmentMapper, attachmentMapper } from './attachment.mapper'

class AttachmentsController {
  private readonly _attachmentMapper: AttachmentMapper
  private readonly _attachmentService: AttachmentService

  constructor(attachmentService: AttachmentService, attachmentMapper: AttachmentMapper) {
    this._attachmentMapper = attachmentMapper
    this._attachmentService = attachmentService
  }

  async createAttachment(req: express.Request, res: express.Response) {
    const { taskId } = req.body
    const createdAttachmentDto: CreateAttachmentCommand = { taskId, file: req.file }

    const savedAttachment: Attachment = await this._attachmentService.createAttachment(
      createdAttachmentDto
    )
    const savedAttachmentDto: AttachmentDTO = this._attachmentMapper.mapToDto(savedAttachment)
    return res.status(201).json(savedAttachmentDto)
  }

  async findById(req: express.Request, res: express.Response) {
    try {
      const singleAttachment: Attachment = await this._attachmentService.findById(
        req.params.attachmentId
      )
      const dto: AttachmentDTO = this._attachmentMapper.mapToDto(singleAttachment)
      return res.status(200).json(dto)
    } catch {
      return res.status(404).send('Attachment with this id not found')
    }
  }

  async deleteById(req: express.Request, res: express.Response) {
    try {
      await this._attachmentService.deleteById(req.params.attachmentId)
      return res.status(200).send('Attachment has been successfully deleted')
    } catch {
      return res.status(404).send('Attachment not found')
    }
  }
}

export default new AttachmentsController(attachmentService, attachmentMapper)

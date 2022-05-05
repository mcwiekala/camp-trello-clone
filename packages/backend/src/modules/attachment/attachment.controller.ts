import express from 'express'
import { AttachmentDTO, CreateAttachmentDTO } from 'shared'
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
    const createdAttachmentDto: CreateAttachmentDTO = { taskId: req.body.taskId, file: req.file }

    const savedAttachment: Attachment = await this._attachmentService.createAttachment(
      createdAttachmentDto
    )
    const savedAttachmentDto: AttachmentDTO = this._attachmentMapper.mapToDto(savedAttachment)
    return res.status(201).json(savedAttachmentDto)
  }

  async findById(req: express.Request, res: express.Response) {
    const singleAttachment: Attachment = await this._attachmentService.findById(
      req.params.attachmentId
    )
    const dto: AttachmentDTO = this._attachmentMapper.mapToDto(singleAttachment)
    return res.status(200).json(dto)
  }

  async deleteById(req: express.Request, res: express.Response) {
    const deletedAttachment: Attachment | null = await this._attachmentService.deleteById(
      req.params.attachmentId
    )
    if (!deletedAttachment) {
      return res.status(404).send('Attachment not found')
    }
    return res.status(200).send('Attachment has been successfully deleted')
  }
}

export default new AttachmentsController(attachmentService, attachmentMapper)

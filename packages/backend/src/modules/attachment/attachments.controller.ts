import express from 'express'
import { AttachmentDTO } from 'shared'
import { Attachment } from './Attachment'
import { AttachmentService, attachmentService } from './attachment.service'
import { AttachmentMapper, attachmentMapper } from './attachment.mapper'

class AttachmentsController {
  private readonly _attachmentMapper: AttachmentMapper
  private readonly _attachmentService: AttachmentService

  constructor(attachmentService: AttachmentService, attachmentMapper: AttachmentMapper) {
    this._attachmentMapper = attachmentMapper
    this._attachmentService = attachmentService
  }

  async create(req: any, res: express.Response) {
    const createdAttachment: Attachment = await this._attachmentService.create(req.file)
    const dto = this._attachmentMapper.mapToDto(createdAttachment)
    return res.status(201).json(dto)
  }

  async getOne(req: express.Request, res: express.Response) {
    const singleAttachment: Attachment = await this._attachmentService.getOne(
      req.params.attachmentId
    )
    const dto: AttachmentDTO = this._attachmentMapper.mapToDto(singleAttachment)
    return res.status(200).json(dto)
  }

  async delete(req: express.Request, res: express.Response): Promise<void> {
    const deletedAttachment: Attachment = await this._attachmentService.delete(
      req.params.attachmentId
    )
    const dto: AttachmentDTO = this._attachmentMapper.mapToDto(deletedAttachment)
    res.status(200).json(dto)
  }
}

export default new AttachmentsController(attachmentService, attachmentMapper)

import express from 'express'
import { upload } from '../../../modules/attachment/attachment.service'
import { CommonRoutesConfig } from './common.routes.config'
import attachmentController from '../../../modules/attachment/attachment.controller'

const V1 = '/v1'

export class AttachmentsRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'AttachmentsRoutes')
  }

  // prettier-ignore
  configureRoutes(): express.Application {

    this.app
      .route(`${V1}/attachments`)
      .post(upload.single('file'), (req, res) => attachmentController.createAttachment(req, res))

    this.app
      .route(`${V1}/attachments/:attachmentId`)
      .get((req, res) => attachmentController.findById(req, res))
      .delete((req, res) => attachmentController.deleteById(req, res))

    this.app
      .route(`${V1}/attachments/download/:attachmentId`)
      .get((req, res) => attachmentController.downloadFile(req, res))

    return this.app
  }
}

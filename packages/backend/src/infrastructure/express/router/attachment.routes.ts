import express from 'express'
import { upload } from '../../../helpers/attachmentsHelper'
import { CommonRoutesConfig } from './common.routes.config'
import attachmentController from '../../../modules/attachment/attachments.controller'

const V1 = '/v1'

export class AttachmentsRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'AttachmentsRoutes')
  }

  // prettier-ignore
  configureRoutes(): express.Application {

    this.app
      .route(`${V1}/attachments`)
      .post(upload.single('file'), (req, res) => attachmentController.create(req, res))

    this.app
      .route(`${V1}/attachments/:attachmentId`)
      .get((req, res) => attachmentController.getOne(req, res))
      .delete((req, res) => attachmentController.delete(req, res))

    return this.app
  }
}

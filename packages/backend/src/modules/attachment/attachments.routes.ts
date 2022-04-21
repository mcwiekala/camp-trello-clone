import { Router } from 'express'
import { upload } from '../../helpers/attachmentsHelper'
import { attachmentsUpload } from './attachments.controller'

export const attachmentsRouter = Router()

attachmentsRouter.post('/uploads', upload.single('file'), attachmentsUpload)

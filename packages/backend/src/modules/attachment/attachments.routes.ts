import { Router } from 'express'
import { upload } from '../../helpers/attachmentsHelper'
import { attachmentsUpload, findByIdAndRemove, findById } from './attachments.controller'

export const attachmentsRouter = Router()

attachmentsRouter.post('/uploads', upload.single('file'), attachmentsUpload)

attachmentsRouter.delete('/uploads/:id', findByIdAndRemove)

attachmentsRouter.get('/uploads/:id', findById)

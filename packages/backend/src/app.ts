import express from 'express'
import mongoSanitize from 'express-mongo-sanitize'
import path from 'path'
import cors from 'cors'
import { attachmentsRouter } from './modules/attachment/attachments.routes'

import router from './infrastructure/express/router'

const app: express.Application = express()
app.use(mongoSanitize())

app.use('../uploads', express.static(path.join(__dirname, 'uploads')))

app.use('/api', attachmentsRouter)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

export default app

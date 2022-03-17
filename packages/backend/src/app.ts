import express from 'express'
import mongoSanitize from 'express-mongo-sanitize'
import cors from 'cors'
import bodyParser from 'body-parser'
import router from './infrastructure/express/router'

const app = express()
app.use(mongoSanitize())

app.use(cors())
app.use(bodyParser.json())
app.use('/v1', router)

export default app

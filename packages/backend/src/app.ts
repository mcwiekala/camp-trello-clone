import express from 'express'
import mongoSanitize from 'express-mongo-sanitize'
import cors from 'cors'
import router from './infrastructure/express/router'

const app = express()
app.use(mongoSanitize())

app.use(cors())
app.use('/v1', router)
export default app

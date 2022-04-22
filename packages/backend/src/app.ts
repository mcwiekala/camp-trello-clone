import express from 'express'
import mongoSanitize from 'express-mongo-sanitize'
import cors from 'cors'

const app = express()
app.use(mongoSanitize())

app.use(cors())
app.use(express.json())
export default app

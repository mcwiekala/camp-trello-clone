/* eslint-disable no-console */
import express from 'express'
import 'dotenv/config'
import mongoSanitize from 'express-mongo-sanitize'
import cors from 'cors'
import router from './infrastructure/express/router'
import './application/authentication'

const app = express()

app.use(mongoSanitize())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())
app.use('/v1', router)

export default app

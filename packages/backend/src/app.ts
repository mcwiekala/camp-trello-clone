/* eslint-disable no-console */
import express from 'express'
import 'dotenv/config'
import session from 'express-session'
import mongoSanitize from 'express-mongo-sanitize'
import cors from 'cors'
import ConnectMongoDBSession from 'connect-mongodb-session'
import router from './infrastructure/express/router'
import './application/authentication'

const SessionStorage = ConnectMongoDBSession(session)

const { DB_USERNAME, DB_PASSWORD } = process.env

const app = express()

const store = new SessionStorage({
  uri: `mongodb://${DB_USERNAME}:${DB_PASSWORD}@localhost:27017/trello-clone`,
  collection: 'sessions'
})

store.on('error', (error) => {
  console.log(error)
})
app.use(mongoSanitize())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store
  })
)

app.use(cors())
app.use('/v1', router)

export default app

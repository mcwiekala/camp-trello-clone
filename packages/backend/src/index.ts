import dotenv from 'dotenv'

import app from './app'
import { connectToDatabase } from './infrastructure/mongoose'

dotenv.config()

const { PORT } = process.env

let server

const startServer = async () => {
  await connectToDatabase()

  server = app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
  })
}

startServer()

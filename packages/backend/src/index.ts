import dotenv from 'dotenv'

import mongoose from 'mongoose'
import app from './app'
import { connectToDatabase } from './infrastructure/mongoose'

dotenv.config()

const { PORT } = process.env

let server

const userSchema = new mongoose.Schema({
  name: String
})

const startServer = async () => {
  await connectToDatabase()

  console.log('init test data')
  const User = mongoose.model('User', userSchema)
  const mark = new User({ name: 'Mark' })
  const adam = new User({ name: 'Adam' })

  console.log(mark.name)
  mark.save()
  adam.save()

  const docs = await User.find()
  console.log(`Founded: ${docs.length} users with name Mark!`)

  server = app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
  })
}

startServer()

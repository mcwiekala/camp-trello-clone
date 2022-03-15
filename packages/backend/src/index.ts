/* eslint-disable no-console */
import dotenv from 'dotenv'
import Task from './modules/task/Task'
import app from './app'
import { connectToDatabase } from './infrastructure/mongoose'
import User from './modules/user/User'

dotenv.config()

const { PORT } = process.env

const startServer = async () => {
  await connectToDatabase()

  async function printData() {
    console.log('Print data in DB')

    const tasks = await Task.find()
    console.log(`Founded: ${tasks.length} tasks!`)
    tasks.forEach((t) => {
      console.log(`${t.toString()}`)
    })

    const users = await User.find()
    console.log(`Founded: ${users.length} users!`)
    users.forEach((u) => {
      console.log(`${u.toString()}`)
    })
  }

  await printData()

  const server = app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
  })
}

startServer()

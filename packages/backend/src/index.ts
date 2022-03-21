/* eslint-disable no-console */
import dotenv from 'dotenv'
import TaskModel from './modules/task/Task.model'
import Board from './modules/board/Board'
import app from './app'
import { connectToDatabase } from './infrastructure/mongoose'
import User from './modules/user/User'
import Attachment from './modules/attachment/Attachment'

dotenv.config()

const { PORT } = process.env

const startServer = async () => {
  await connectToDatabase()

  async function printData() {
    console.log('Print data in DB')

    const tasks = await TaskModel.find()
    const boards = await Board.find()
    console.log(`Found: ${tasks.length} tasks!`)
    tasks.forEach((t) => {
      console.log(`${t.toString()}`)
    })
    console.log(`Found: ${boards.length} boards!`)
    boards.forEach((t) => {
      console.log(`${t.toString()}`)
    })

    const users = await User.find()
    console.log(`Found: ${users.length} users!`)
    users.forEach((u) => {
      console.log(`${u.toString()}`)
    })

    const attachments = await Attachment.find()
    console.log(`Found: ${attachments.length} attachments!`)
    attachments.forEach((a) => {
      console.log(`${a.toString()}`)
    })
  }

  await printData()

  const server = app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
  })
}

startServer()

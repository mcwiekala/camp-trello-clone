/* eslint-disable no-console */
import dotenv from 'dotenv'
import http from 'http'
import TaskModel from './modules/task/task.model'
import Board from './modules/board/Board'
import app from './app'
import { connectToDatabase } from './infrastructure/mongoose'
import User from './modules/user/User'
import Attachment from './modules/attachment/Attachment'
import { CommonRoutesConfig } from './infrastructure/express/router/common.routes.config'
import { TaskRoutes } from './infrastructure/express/router/task.routes'

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

  const server: http.Server = http.createServer(app)
  const routes: Array<CommonRoutesConfig> = []

  routes.push(new TaskRoutes(app))

  console.log(`Listening to port: ${PORT}`)
  server.listen(PORT, () => {
    routes.forEach((route: CommonRoutesConfig) => {
      console.log(`Routes configured for: ${route.getName()}`)
    })
  })
}

startServer()

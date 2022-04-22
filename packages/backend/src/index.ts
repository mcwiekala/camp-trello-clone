/* eslint-disable no-console */
import dotenv from 'dotenv'
import http from 'http'
import Task from './modules/task/Task'
import { Dashboard } from './modules/dashboard/dashboard.model'
import app from './app'
import { connectToDatabase } from './infrastructure/mongoose'
import User from './modules/user/User'
import Attachment from './modules/attachment/Attachment'
import { CommonRoutesConfig } from './infrastructure/express/router/common.routes.config'
import { DashboardRoutes } from './infrastructure/express/router/dashboard.routes'

dotenv.config()

const { PORT } = process.env

const startServer = async () => {
  await connectToDatabase()

  async function printData() {
    console.log('Print data in DB')

    const tasks = await Task.find()
    const boards = await Dashboard.find()
    console.log(`Founded: ${tasks.length} tasks!`)
    tasks.forEach((t) => {
      console.log(`${t.toString()}`)
    })
    console.log(`Founded: ${boards.length} boards!`)
    boards.forEach((t) => {
      console.log(`${t.toString()}`)
    })

    const users = await User.find()
    console.log(`Founded: ${users.length} users!`)
    users.forEach((u) => {
      console.log(`${u.toString()}`)
    })

    const attachments = await Attachment.find()
    console.log(`Founded: ${attachments.length} attachments!`)
    attachments.forEach((a) => {
      console.log(`${a.toString()}`)
    })
  }

  await printData()

  const server: http.Server = http.createServer(app)
  const routes: Array<CommonRoutesConfig> = []

  routes.push(new DashboardRoutes(app))

  console.log(`Listening to port: ${PORT}`)
  server.listen(PORT, () => {
    routes.forEach((route: CommonRoutesConfig) => {
      console.log(`Routes configured for: ${route.getName()}`)
    })
  })
}

startServer()

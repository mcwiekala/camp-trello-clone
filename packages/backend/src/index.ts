/* eslint-disable no-console */
import 'dotenv/config'
import http from 'http'
import Task from './modules/task/task.model'
import Dashboard from './modules/dashboard/Dashboard'
import app from './app'
import { connectToDatabase } from './infrastructure/mongoose'
import User from './modules/user/user.model'
import Attachment from './modules/attachment/attachment.model'
import { CommonRoutesConfig } from './infrastructure/express/router/common.routes.config'
import { TaskRoutes } from './infrastructure/express/router/task.routes'
import { UserRoutes } from './infrastructure/express/router/user.routes'
import { AttachmentsRoutes } from './infrastructure/express/router/attachment.routes'

const { PORT } = process.env

const startServer = async () => {
  await connectToDatabase()

  async function printData() {
    console.log('Print data in DB')

    const tasks = await Task.find()
    const dashboard = await Dashboard.find()
    console.log(`Found: ${tasks.length} tasks!`)
    tasks.forEach((t) => {
      console.log(`${t.toString()}`)
    })
    console.log(`Found: ${dashboard.length} boards!`)
    dashboard.forEach((t) => {
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
  routes.push(new UserRoutes(app))
  routes.push(new AttachmentsRoutes(app))

  console.log(`Listening to port: ${PORT}`)
  server.listen(PORT, () => {
    routes.forEach((route: CommonRoutesConfig) => {
      console.log(`Routes configured for: ${route.getName()}`)
    })
  })
}

startServer()

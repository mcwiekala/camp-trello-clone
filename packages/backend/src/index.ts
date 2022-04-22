/* eslint-disable no-console */
import 'dotenv/config'
import Task from './modules/task/Task'
import Dashboard from './modules/dashboard/Dashboard'
import app from './app'
import { connectToDatabase } from './infrastructure/mongoose'
import User from './modules/user/User'
import Attachment from './modules/attachment/Attachment'

const { PORT } = process.env

const startServer = async () => {
  await connectToDatabase()

  async function printData() {
    console.log('Print data in DB')

    const tasks = await Task.find()
    const dashboard = await Dashboard.find()
    console.log(`Founded: ${tasks.length} tasks!`)
    tasks.forEach((t) => {
      console.log(`${t.toString()}`)
    })
    console.log(`Founded: ${dashboard.length} boards!`)
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  })
}

startServer()

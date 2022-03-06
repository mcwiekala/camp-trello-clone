/* eslint-disable no-console */
import dotenv from 'dotenv'
import app from './app'
import { connectToDatabase } from './infrastructure/mongoose'
// TODO: use lerna with shared lib
// eslint-disable-next-line import/no-relative-packages
import Task from '../../shared/models/task'

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
  }

  await printData()

  server = app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
  })
}

startServer()

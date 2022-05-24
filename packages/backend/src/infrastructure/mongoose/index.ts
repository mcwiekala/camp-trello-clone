import 'dotenv/config'
import mongoose from 'mongoose'

export const connectToDatabase = async () => {
  const { DB_USERNAME, DB_PASSWORD, DB_PORT } = process.env
  const dbURL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@trello-clone.sidk4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

  /* eslint-disable no-console */
  try {
    await mongoose.connect(dbURL)
    console.log('Connected to database')
  } catch (error: unknown) {
    console.log('Error connecting to database: ', error)
  }
  /* eslint-enable no-console */
}

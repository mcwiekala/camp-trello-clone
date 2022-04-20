import mongoose from 'mongoose'

export const connectToDatabase = async () => {
  const { DB_USERNAME, DB_PASSWORD } = process.env
  const dbURL = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@localhost:27017/trello-clone`

  /* eslint-disable no-console */
  try {
    await mongoose.connect(dbURL)
    console.log('Connected to database')
  } catch (error: unknown) {
    console.log('Error connecting to database: ', error)
  }
  /* eslint-enable no-console */
}

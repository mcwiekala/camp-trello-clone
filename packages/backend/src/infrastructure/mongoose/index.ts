import mongoose from 'mongoose'

export const connectToDatabase = async () => {
  const { DB_USERNAME, DB_PASSWORD } = process.env
  const dbURL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@trello-clone.sidk4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

  try {
    await mongoose.connect(dbURL)
    console.log('Connected to database')
  } catch (error: unknown) {
    console.log('Error connecting to database: ', error)
  }
}

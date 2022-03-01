import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  captionURL: String,
  attachments: [
    {
      id: String,
      URL: String,
      fileName: String,
      createdAt: String
    }
  ],

  comments: [
    {
      id: String,
      createdAt: String,
      content: String,
      user: {
        id: String,
        avatarURL: String,
        username: String
      }
    }
  ]
})
const Task = mongoose.model('User', taskSchema)
export default Task

import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  imageCoverUrl: String,
  attachments: [
    {
      id: String
    }
  ],

  comments: [
    {
      id: String,
      createdAt: { type: Date, default: Date.now },
      content: String,
      user: {
        id: String,
        avatarId: Number,
        username: String
      }
    }
  ]
})
const Task = mongoose.model('Task', taskSchema)
export default Task

import mongoose from 'mongoose'

const { ObjectId } = mongoose.Schema

const taskSchema = new mongoose.Schema({
  // _id: ObjectId,
  title: String,
  description: String,
  imageCoverId: String,
  attachments: [
    {
      attachments_id: ObjectId
    }
  ],

  comments: [
    {
      createdAt: { type: Date, default: Date.now },
      content: String,
      user: {
        user_id: ObjectId,
        avatarId: Number,
        username: String
      }
    }
  ]
})
const Task = mongoose.model('Task', taskSchema)
export default Task

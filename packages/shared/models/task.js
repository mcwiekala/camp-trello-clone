import mongoose from 'mongoose'

const { ObjectId } = mongoose.Schema

const taskSchema = new mongoose.Schema({
  _id: ObjectId,
  title: String,
  description: String,
  imageCoverId: String,
  attachments: [
    {
      _id: ObjectId
    }
  ],

  comments: [
    {
      _id: ObjectId,
      createdAt: { type: Date, default: Date.now },
      content: String,
      user: {
        _id: ObjectId,
        avatarId: Number,
        username: String
      }
    }
  ]
})
const Task = mongoose.model('Task', taskSchema)
export default Task

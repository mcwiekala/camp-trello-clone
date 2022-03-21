import mongoose from 'mongoose'

const { ObjectId } = mongoose.Types

const taskSchema = new mongoose.Schema({
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
const TaskModel = mongoose.model('Task', taskSchema)
export default TaskModel

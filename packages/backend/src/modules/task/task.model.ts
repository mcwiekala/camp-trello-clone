import mongoose from 'mongoose'
import { TaskBase } from 'shared'

const { ObjectId } = mongoose.Types

export interface TaskDocument extends TaskBase, mongoose.Document {
  attachments: any[]
}

export interface TaskModel extends mongoose.Model<TaskDocument> {}

const taskSchema: mongoose.Schema<TaskDocument> = new mongoose.Schema<TaskDocument, TaskModel>({
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

export default mongoose.model<TaskDocument, TaskModel>('Task', taskSchema)

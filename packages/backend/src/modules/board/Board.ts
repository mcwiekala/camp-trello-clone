import mongoose from 'mongoose'
import { Status } from './Status'

const { ObjectId } = mongoose.Types

const columnSchema = new mongoose.Schema({
  _id: ObjectId,
  title: String,
  tasks: [
    {
      _id: ObjectId,
      title: String,
      imageCoverId: Number,
      comments: [{ _id: ObjectId }],
      attachments: [{ _id: ObjectId }],
      users: [{ _id: ObjectId }]
    }
  ]
})

const boardSchema = new mongoose.Schema({
  _id: ObjectId,
  title: String,
  description: String,
  createdAt: Date,
  status: {
    type: String,
    enum: Status
  },
  users: [
    {
      _id: ObjectId,
      username: String,
      avatarId: Number
    }
  ],
  columns: [columnSchema]
})
const Board = mongoose.model('Board', boardSchema)
export default Board

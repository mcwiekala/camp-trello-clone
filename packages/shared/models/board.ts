import mongoose from 'mongoose'

const { ObjectId } = mongoose.Schema

const boardSchema = new mongoose.Schema({
  _id: ObjectId,
  title: String,
  description: String,
  createdAt: Date,
  status: String,
  users: [
    {
      _id: ObjectId,
      username: String,
      avatarId: Number
    }
  ],
  columns: [
    {
      _id: ObjectId,
      title: String,
      tasks: [
        {
          _id: ObjectId,
          title: String,
          imageCoverId: Number,
          comments: [{ _id: ObjectId }],
          attachments: [{ _id: ObjectId }],
          users: [{ id: String }]
        }
      ]
    }
  ]
})
const Board = mongoose.model('User', boardSchema)
export default Board

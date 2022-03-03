import mongoose from 'mongoose'

const boardSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  createdAt: Date,
  status: String,
  users: [
    {
      id: String,
      username: String,
      avatarUrl: String
    }
  ],
  columns: [
    {
      id: String,
      title: String,
      tasks: [
        {
          id: String,
          title: String,
          captionUrl: String,
          comments: [{ id: String }],
          attachments: [{ id: String }],
          users: [{ id: String }]
        }
      ]
    }
  ]
})
const Board = mongoose.model('User', boardSchema)
export default Board

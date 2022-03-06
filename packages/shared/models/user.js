import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  id: String,
  username: String,
  passwordHash: String,
  avatarId: Number,
  dashboards: [
    {
      id: String,
      imageCoverUrl: String,
      title: String
    }
  ],

  users: [
    {
      id: String,
      avatarId: Number
    }
  ]
})
const User = mongoose.model('User', userSchema)
export default User

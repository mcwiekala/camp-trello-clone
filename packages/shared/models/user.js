import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  id: String,
  username: String,
  passwordHash: String,
  avatarURL: String,
  dashboards: [
    {
      id: String,
      captionURL: String,
      title: String
    }
  ],

  users: [
    {
      id: String,
      avatarURL: String
    }
  ]
})
const User = mongoose.model('User', userSchema)
export default User

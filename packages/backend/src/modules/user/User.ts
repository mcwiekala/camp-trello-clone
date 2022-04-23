import mongoose from 'mongoose'
import { Role } from './Role'

// const { ObjectId } = mongoose.Types

const userSchema = new mongoose.Schema({
  username: String,
  googleId: String,
  avatarUrl: String,
  email: String,
  dashboards: [
    {
      imageCoverId: String,
      title: String,
      role: {
        type: String,
        enum: Role,
        default: Role.NO_ACCESS
      },
      users: [
        {
          avatarId: Number
        }
      ]
    }
  ]
})

const User = mongoose.model('User', userSchema)
export default User

import mongoose from 'mongoose'
import { Role } from './role'

const { ObjectId } = mongoose.Types

const userSchema = new mongoose.Schema({
  username: String,
  passwordHash: String,
  avatarId: Number,
  dashboards: [
    {
      _id: ObjectId,
      imageCoverId: String,
      title: String,
      role: {
        type: String,
        enum: Role,
        default: Role.NO_ACCESS
      },
      users: [
        {
          _id: ObjectId,
          avatarId: Number
        }
      ]
    }
  ]
})

const UserModel = mongoose.model('User', userSchema)
export default UserModel

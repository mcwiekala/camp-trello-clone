import mongoose from 'mongoose'

const { ObjectId } = mongoose.Schema

const userSchema = new mongoose.Schema({
  _id: ObjectId,
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
        enum: ['ADMIN', 'MEMBER', 'VIEWER', 'NO_ACCESS']
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
const User = mongoose.model('User', userSchema)
export default User

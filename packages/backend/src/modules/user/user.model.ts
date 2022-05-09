import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: String,
  passwordHash: String,
  avatarId: Number,
  memberOfDashboards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Dashboard' }]
})

const UserModel = mongoose.model('User', userSchema)
export default UserModel

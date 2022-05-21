/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose'
import { UserBase } from 'packages/shared/lib'
import { Role } from './role'

export interface UserDocument extends UserBase, mongoose.Document {
  dashboards: any[]
}

export interface UserModel extends mongoose.Model<UserDocument> {}

const userSchema: mongoose.Schema<UserDocument> = new mongoose.Schema<UserDocument, UserModel>({
  username: { type: String, required: true },
  googleId: { type: String, required: true },
  avatarUrl: { type: String, required: true },
  email: { type: String, required: true },
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

export default mongoose.model<UserDocument, UserModel>('User', userSchema)

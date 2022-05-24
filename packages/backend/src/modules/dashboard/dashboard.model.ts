import mongoose from 'mongoose'
import { DashboardBase, DashboardVisibility } from 'shared'

const { ObjectId } = mongoose.Types

export interface DashboardDocument extends DashboardBase, mongoose.Document {
  columns: any[]
}

export interface DashboardModel extends mongoose.Model<DashboardDocument> {}

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

const dashboardSchema = new mongoose.Schema<DashboardDocument, DashboardModel>({
  _id: ObjectId,
  title: String,
  description: String,
  imageCoverUrl: String,
  createdAt: Date,
  status: {
    type: String,
    enum: DashboardVisibility,
    default: DashboardVisibility.PUBLIC
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
const Dashboard = mongoose.model<DashboardDocument, DashboardModel>('Dashboard', dashboardSchema)
const DashboardColumn = mongoose.model('DashboardColumn', columnSchema)
export { Dashboard, DashboardColumn }

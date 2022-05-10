import mongoose from 'mongoose'
import { DashboardVisibility } from 'shared'
import { Dashboard as DashboardB } from './dashboard'

const { ObjectId } = mongoose.Types

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

const dashboardSchema = new mongoose.Schema({
  _id: ObjectId,
  title: String,
  description: String,
  imageCoverUrl: String,
  createdAt: Date,
  status: {
    type: Object,
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
const Dashboard = mongoose.model('Dashboard', dashboardSchema)
const DashboardColumn = mongoose.model('DashboardColumn', columnSchema)
export { Dashboard, DashboardColumn }

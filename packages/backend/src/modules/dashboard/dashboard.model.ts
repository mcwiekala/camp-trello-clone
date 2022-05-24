import mongoose from 'mongoose'
import { DashboardBase, DashboardVisibility } from 'shared'
import ColumnBase from 'packages/shared/src/models/columnBase'

const { ObjectId } = mongoose.Types

export interface DashboardDocument extends DashboardBase, mongoose.Document {
  columns: ColumnBase[]
}

export interface DashboardModel extends mongoose.Model<DashboardDocument> {}

const columnSchema = new mongoose.Schema({
  idCol: ObjectId,
  title: String,
  order: Number,
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
const DashboardMongooseModel = mongoose.model<DashboardDocument, DashboardModel>(
  'Dashboard',
  dashboardSchema
)
export { DashboardMongooseModel }

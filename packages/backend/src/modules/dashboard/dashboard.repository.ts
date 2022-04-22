import CreateDashboardCommand from 'packages/shared/api/dto/CreateDashboardCommand'
import mongoose from 'mongoose'
import { Dashboard, DashboardColumn } from './dashboard.model'

class TaskRepository {
  private dashboardModel = Dashboard

  async createDashboard(createDashboardCommand: CreateDashboardCommand) {
    console.log('Creating new dashboard in DB')
    const dashboardColumn = DashboardColumn.create({
      _id: new mongoose.Types.ObjectId(),
      title: 'first column'
    })
    const dashboard = await this.dashboardModel.create({
      _id: new mongoose.Types.ObjectId(),
      title: createDashboardCommand.title,
      description: createDashboardCommand.description,
      imageCoverUrl: createDashboardCommand.coverImageUrl,
      createdAt: new Date(),
      status: {
        type: createDashboardCommand.status.type,
        enum: createDashboardCommand.status.enum
      },
      users: [],
      columns: [dashboardColumn, dashboardColumn]
    })

    await dashboard.save()
    return dashboard
  }

  async getDashboards() {
    const boards = await this.dashboardModel.find()
    console.log(boards)
    return boards
  }

  async getDashboard(_id: string) {
    const dashboard = await this.dashboardModel.findById(_id)
    console.log(dashboard)
    return dashboard
  }
}

export default new TaskRepository()

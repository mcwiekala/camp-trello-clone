import CreateDashboardCommand from 'packages/shared/src/api/dto/CreateDashboardCommand.dto'
import CreateTaskCommand from 'packages/shared/src/api/dto/CreateTaskCommand.dto'
import mongoose from 'mongoose'
import { Dashboard, DashboardColumn } from './dashboard.model'
import { Task } from '../task/task'

export class DashboardRepository {
  private readonly dashboardModel = Dashboard

  constructor(boardModel: any) {
    this.dashboardModel = boardModel
  }

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

  async addNewTaskToDashboard(createTaskCommand: CreateTaskCommand, savedTask: Task) {
    const dashboard = await this.dashboardModel.findById(createTaskCommand.idDashboard)
    const idCol = { idColumn: createTaskCommand.idColumn }
    const columnIndex = dashboard.columns.findIndex(
      (x: { _id: string }) => String(x._id) === idCol.idColumn
    )

    dashboard.columns[columnIndex].tasks.push(savedTask)
    await dashboard.save()
    console.log(
      `Dashboard repository: task ${savedTask} added to idDashboard: ("${createTaskCommand.idDashboard}"), idColumn: ("${createTaskCommand.idColumn}")`
    )
  }
}

export default new DashboardRepository(Dashboard)

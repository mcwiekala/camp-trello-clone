import { CreateTaskCommandDTO, CreateDashboardCommand } from 'shared'
import mongoose from 'mongoose'
import { Dashboard as DashboardModel } from './dashboard.model'
import { Task } from '../task/task'
import { Dashboard } from './dashboard'

export class DashboardRepository {
  private readonly _dashboardModel

  constructor(dashboardModel: any) {
    this._dashboardModel = dashboardModel
  }

  async createDashboard(createDashboardCommand: CreateDashboardCommand): Promise<Dashboard> {
    console.log('Creating new dashboard in DB')
    const dashboard = await this._dashboardModel.create({
      _id: new mongoose.Types.ObjectId(),
      title: createDashboardCommand.title,
      description: createDashboardCommand.description,
      imageCoverUrl: createDashboardCommand.imageCoverUrl,
      createdAt: new Date(),
      status: createDashboardCommand.status,
      users: [],
      columns: []
    })

    await dashboard.save()
    return dashboard
  }

  async getDashboards(): Promise<Dashboard[]> {
    const dashboards: Dashboard[] = await this._dashboardModel.find()
    console.log(dashboards)
    return dashboards
  }

  async getDashboard(_id: string): Promise<Dashboard> {
    const dashboard: Dashboard | null = await this._dashboardModel.findById(_id)
    if (dashboard === null) {
      throw new Error(`No dashboard found with id ${_id}`)
    }
    console.log(dashboard)
    return dashboard
  }

  async addNewTaskToDashboard(
    createTaskCommand: CreateTaskCommandDTO,
    savedTask: Task
  ): Promise<Task> {
    const dashboard = await this._dashboardModel.findById(createTaskCommand.idDashboard)
    if (dashboard === null) {
      throw new Error(`No dashboard found with id ${createTaskCommand.idDashboard}`)
    }
    const columnIndex = dashboard.columns.findIndex(
      (x: { _id: string }) => String(x._id) === createTaskCommand.idColumn
    )

    dashboard.columns[columnIndex].tasks.push(savedTask)
    await dashboard.save()
    console.log(
      `Dashboard repository: task ${savedTask} added to idDashboard: ("${createTaskCommand.idDashboard}"), idColumn: ("${createTaskCommand.idColumn}")`
    )
    return savedTask
  }
}
const dashboardRepository = new DashboardRepository(DashboardModel)
export { dashboardRepository }

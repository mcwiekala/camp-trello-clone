import mongoose, { ObjectId } from 'mongoose'
import { CreateTaskCommandDTO, UpdateTaskCommand, CreateDashboardCommand } from 'shared'
import { Dashboard as DashboardModel } from './dashboard.model'
import Task from '../task/task'
import { Dashboard } from './dashboard'

export class DashboardRepository {
  private readonly _dashboardModel

  private findIndexOfDocument(id: string, array: { _id: ObjectId }[]): number {
    const documentIndex = array.findIndex(
      (columnOrTaskID: { _id: ObjectId }) => String(columnOrTaskID._id) === id
    )
    return documentIndex
  }

  constructor(dashboardModel: any) {
    this._dashboardModel = dashboardModel
  }

  async createDashboard(createDashboardCommand: CreateDashboardCommand): Promise<Dashboard> {
    const dashboard = await this._dashboardModel.create({
      _id: new mongoose.Types.ObjectId(),
      title: createDashboardCommand.title,
      description: createDashboardCommand.description,
      imageCoverUrl: createDashboardCommand.imageCoverUrl,
      createdAt: new Date(),
      status: createDashboardCommand.status,
      users: createDashboardCommand.users,
      columns: []
    })

    await dashboard.save()
    console.log(dashboard)
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
      throw new Error(`No dashboard found with id: [${createTaskCommand.idDashboard}]`)
    }
    const idCol = { idColumn: createTaskCommand.idColumn }
    const columnIndex = this.findIndexOfDocument(idCol.idColumn, dashboard.columns)

    dashboard.columns[columnIndex].tasks.push(savedTask)
    await dashboard.save()
    // eslint-disable-next-line no-console
    console.log(
      `Dashboard repository: task ${savedTask} added to idDashboard: ("${createTaskCommand.idDashboard}"), idColumn: ("${createTaskCommand.idColumn}")`
    )
    return savedTask
  }

  async updateTaskOnDashboard(updateTaskCommand: UpdateTaskCommand, taskId: string) {
    const dashboard = await this._dashboardModel.findById(updateTaskCommand.idDashboard)
    const idCol = updateTaskCommand.idColumn
    const columnIndex = this.findIndexOfDocument(idCol, dashboard.columns)
    const taskIndex = this.findIndexOfDocument(taskId, dashboard.columns[columnIndex].tasks)
    const task = dashboard.columns[columnIndex].tasks[taskIndex]
    if (task.title !== updateTaskCommand.title) {
      task.title = updateTaskCommand.title
    }
    if (task.imageCoverId !== updateTaskCommand.imageCoverId) {
      task.imageCoverId = updateTaskCommand.imageCoverId
    }
    await dashboard.save()
    console.log(`Dashboard repository: task id: ("${taskId}") updated on dashboard`)
  }
}
const dashboardRepository = new DashboardRepository(DashboardModel)
export { dashboardRepository }

import mongoose, { ObjectId } from 'mongoose'
import {
  CreateTaskCommandDTO,
  UpdateTaskCommand,
  CreateDashboardCommand,
  CannotFindDocumentError,
  CannotUpdateDocumentError,
  DashboardDTO
} from 'shared'
import { DashboardModel, DashboardMongooseModel, DashboardDocument } from './dashboard.model'
import Task from '../task/task'
import { Column } from './column'
import { Dashboard } from './dashboard'
import { dashboardMapper, DashboardMapper } from './dashboard.mapper'
import { TaskDocument } from '../task/task.model'

export class DashboardRepository {
  private readonly _dashboardModel: DashboardModel
  private readonly _dashboardMapper: DashboardMapper

  private findIndexOfTask(id: string, array: TaskDocument[]): number {
    const documentIndex = array.findIndex((task: TaskDocument) => String(task._id) === id)
    return documentIndex
  }

  private findIndexOfTaskType(id: string, array: Task[]): number {
    const documentIndex = array.findIndex((task: Task) => String(task._id) === id)
    return documentIndex
  }

  private findIndexOfColumn(id: string, array: Column[]): number {
    return array.findIndex((column: Column) => String(column.internalId) === id)
  }

  constructor(dashboardModel: DashboardModel, dashboardMapper: DashboardMapper) {
    this._dashboardModel = dashboardModel
    this._dashboardMapper = dashboardMapper
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
    return this._dashboardMapper.mapToDomain(dashboard)
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
    const dashboard: DashboardDocument | null = await this._dashboardModel.findById(
      createTaskCommand.idDashboard
    )
    if (dashboard === null) {
      throw new Error(`No dashboard found with id: [${createTaskCommand.idDashboard}]`)
    }
    const idCol = { idColumn: createTaskCommand.idColumn }
    // const columnIndex = this.findIndexOfDocument(idCol.idColumn, dashboard.columns)
    const columnIndex = this.findIndexOfColumn(idCol.idColumn, dashboard.columns)

    dashboard.columns[columnIndex].tasks.push(savedTask)
    await dashboard.save()
    // eslint-disable-next-line no-console
    console.log(
      `Dashboard repository: task ${savedTask} added to idDashboard: ("${createTaskCommand.idDashboard}"), idColumn: ("${createTaskCommand.idColumn}")`
    )
    return savedTask
  }

  async updateTaskOnDashboard(updateTaskCommand: UpdateTaskCommand, taskId: string) {
    const dashboard: DashboardDocument | null = await this._dashboardModel.findById(
      updateTaskCommand.idDashboard
    )
    const idCol = updateTaskCommand.idColumn
    if (!dashboard) {
      throw new Error(`No dashboard found with id: [${updateTaskCommand.idDashboard}]`)
    }
    const columnIndex = this.findIndexOfColumn(idCol, dashboard.columns)
    const taskIndex = this.findIndexOfTaskType(taskId, dashboard.columns[columnIndex].tasks)
    const task = dashboard.columns[columnIndex].tasks[taskIndex]
    if (task.title !== updateTaskCommand.title) {
      task.title = updateTaskCommand.title!
    }
    if (task.imageCoverId !== updateTaskCommand.imageCoverId) {
      task.imageCoverId = updateTaskCommand.imageCoverId
    }
    await dashboard.save()
    console.log(`Dashboard repository: task id: ("${taskId}") updated on dashboard`)
  }

  async removeDashboardById(dashboardId: string): Promise<Dashboard> {
    const dashboardDocument: DashboardDocument | null = await this._dashboardModel
      .findByIdAndRemove(dashboardId)
      .exec()
    if (dashboardDocument === null) {
      throw new CannotFindDocumentError('Dashboard', dashboardId)
    }
    return dashboardMapper.mapToDomain(dashboardDocument)
  }

  async updateDashboardById(
    updateDashboardCommand: DashboardDTO,
    dashboardId: string
  ): Promise<Dashboard> {
    const updatedDashboard: DashboardDocument = await this._dashboardModel
      .updateOne(
        { _id: dashboardId },
        {
          $set: {
            title: updateDashboardCommand.title,
            description: updateDashboardCommand.description,
            imageCoverUrl: updateDashboardCommand.imageCoverUrl,
            status: updateDashboardCommand.status,
            columns: updateDashboardCommand.columns
          }
        }
      )
      .catch(() => {
        throw new CannotUpdateDocumentError('Task', dashboardId, updatedDashboard)
      })
      .then()
    console.log(`Updated dashboard in DB: ${updatedDashboard}`)
    return dashboardMapper.mapToDomain(updatedDashboard)
  }
}
const dashboardRepository = new DashboardRepository(DashboardMongooseModel, dashboardMapper)
export { dashboardRepository }

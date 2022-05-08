import { ObjectId } from 'mongoose'
import { CreateTaskCommandDTO, UpdateTaskCommandDTO } from 'shared'
import DashboardModel from './Dashboard'
import { Task } from '../task/task'

export class DashboardRepository {
  private readonly _dashboardModel = DashboardModel

  private findIndexOfDocument(id: string, array: { _id: ObjectId }[]): number {
    const documentIndex = array.findIndex(
      (columnOrTaskID: { _id: ObjectId }) => String(columnOrTaskID._id) === id
    )
    return documentIndex
  }

  constructor(boardModel: any) {
    this._dashboardModel = boardModel
  }

  async addNewTaskToDashboard(createTaskCommand: CreateTaskCommandDTO, savedTask: Task) {
    const dashboard = await this._dashboardModel.findById(createTaskCommand.idDashboard)
    const idCol = { idColumn: createTaskCommand.idColumn }
    const columnIndex = this.findIndexOfDocument(idCol.idColumn, dashboard.columns)

    dashboard.columns[columnIndex].tasks.push(savedTask)
    await dashboard.save()
    console.log(
      `Dashboard repository: task ${savedTask} added to idDashboard: ("${createTaskCommand.idDashboard}"), idColumn: ("${createTaskCommand.idColumn}")`
    )
  }

  async updateTaskOnDashboard(updateTaskCommand: UpdateTaskCommandDTO, taskId: string) {
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
export default dashboardRepository

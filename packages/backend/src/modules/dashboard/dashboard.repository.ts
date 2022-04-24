import { CreateTaskCommandDTO, UpdateTaskCommand } from 'shared'
import DashboardModel from './Dashboard'
import { Task } from '../task/task'

export class DashboardRepository {
  private readonly _dashboardModel = DashboardModel

  private findColumnIndex(id: string, array: []): number {
    const indexNumber = array.findIndex((x: { _id: string }) => String(x._id) === id)
    return indexNumber
  }

  constructor(boardModel: any) {
    this._dashboardModel = boardModel
  }

  async addNewTaskToDashboard(createTaskCommand: CreateTaskCommandDTO, savedTask: Task) {
    const dashboard = await this._dashboardModel.findById(createTaskCommand.idDashboard)
    const idCol = { idColumn: createTaskCommand.idColumn }
    const columnIndex = this.findColumnIndex(idCol.idColumn, dashboard.columns)

    dashboard.columns[columnIndex].tasks.push(savedTask)
    await dashboard.save()
    console.log(
      `Dashboard repository: task ${savedTask} added to idDashboard: ("${createTaskCommand.idDashboard}"), idColumn: ("${createTaskCommand.idColumn}")`
    )
  }

  async updateTaskOnDashboard(updateTaskCommand: UpdateTaskCommand, id: string) {
    const dashboard = await this._dashboardModel.findById(updateTaskCommand.idDashboard)
    const idCol = { idColumn: updateTaskCommand.idColumn }
    const columnIndex = this.findColumnIndex(idCol.idColumn, dashboard.columns)
    const taskIndex = this.findColumnIndex(id, dashboard.columns[columnIndex].tasks)
    function updateTask(): void {
      const task = dashboard.columns[columnIndex].tasks[taskIndex]
      if (task.title !== updateTaskCommand.title) {
        task.title = updateTaskCommand.title
      }
      if (task.imageCoverId !== updateTaskCommand.imageCoverId) {
        task.imageCoverId = updateTaskCommand.imageCoverId
      }
    }
    updateTask()
    await dashboard.save()
    console.log(`Dashboard repository: task id: ("${id}") updated on dashboard`)
  }
}

const dashboardRepository = new DashboardRepository(DashboardModel)
export default dashboardRepository

import { CreateTaskCommandDTO } from 'shared'
import DashboardModel from './Dashboard'
import { Task } from '../task/task'

export class DashboardRepository {
  private readonly _dashboardModel = DashboardModel

  constructor(boardModel: any) {
    this._dashboardModel = boardModel
  }

  async addNewTaskToDashboard(createTaskCommand: CreateTaskCommandDTO, savedTask: Task) {
    const dashboard = await this._dashboardModel.findById(createTaskCommand.idDashboard)
    const idCol = { idColumn: createTaskCommand.idColumn }
    const columnIndex = dashboard.columns.findIndex(
      (x: { _id: string }) => String(x._id) === idCol.idColumn
    )

    dashboard.columns[columnIndex].tasks.push(savedTask)
    await dashboard.save()
    // eslint-disable-next-line no-console
    console.log(
      `Dashboard repository: task ${savedTask} added to idDashboard: ("${createTaskCommand.idDashboard}"), idColumn: ("${createTaskCommand.idColumn}")`
    )
  }
}

const dashboardRepository = new DashboardRepository(DashboardModel)
export default dashboardRepository

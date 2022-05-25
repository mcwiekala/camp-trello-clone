import UserDto from './user.dto'
import DashboardBase from '../../models/dashboardBase'
import ColumnDTO from './column.dto'

export default interface DashboardDTO extends DashboardBase {
  _id: string
  users: UserDto[]
  columns: ColumnDTO[]
}

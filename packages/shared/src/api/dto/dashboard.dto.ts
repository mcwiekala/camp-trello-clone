import UserDto from './user.dto'
import DashboardBase from '../../models/dashboardBase'

export default interface DashboardDTO extends DashboardBase {
  id: string
  users: UserDto[]
}

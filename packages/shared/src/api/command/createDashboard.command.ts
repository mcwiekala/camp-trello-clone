import DashboardVisibility from '../DashboardVisibility'
import { UserDTO } from '../index'

export interface CreateDashboardCommand {
  // id?: string
  title: string
  description?: string
  imageCoverUrl: string
  users: UserDTO[]
  createdAt?: Date
  status: DashboardVisibility
}

export default CreateDashboardCommand

import DashboardVisibility from '../DashboardVisibility'
import { ColumnDTO, UserDTO } from '../index'

export interface CreateDashboardCommand {
  id: string
  title: string
  description?: string
  imageCoverUrl: string
  users: UserDTO[]
  columns: ColumnDTO[]
  createdAt?: Date
  status: DashboardVisibility
}

export default CreateDashboardCommand

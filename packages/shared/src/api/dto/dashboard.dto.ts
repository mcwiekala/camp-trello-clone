import DashboardVisibility from '../DashboardVisibility'
import UserDto from './user.dto'
import ColumnDTO from './column.dto'

interface DashboardDTO {
  id?: string
  title: string
  description?: string
  imageCoverUrl: string
  users?: UserDto[]
  createdAt?: Date
  status: DashboardVisibility
  columns?: ColumnDTO[]
}

export default DashboardDTO

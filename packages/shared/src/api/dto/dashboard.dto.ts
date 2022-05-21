import DashboardVisibility from '../DashboardVisibility'
import { UserDto } from './user.dto'

interface DashboardDTO {
  id?: string
  title: string
  description?: string
  imageCoverUrl: string
  users?: UserDto[]
  createdAt?: Date
  status: DashboardVisibility
}

export default DashboardDTO

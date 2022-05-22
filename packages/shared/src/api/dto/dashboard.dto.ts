import DashboardVisibility from '../DashboardVisibility'
import ColumnDTO from './column.dto'

interface DashboardDTO {
  id?: string
  title?: string
  description?: string
  imageCoverUrl?: string
  createdAt?: string
  status?: DashboardVisibility
  columns?: ColumnDTO[]
}

export default DashboardDTO

import DashboardVisibility from '../DashboardVisibility'

interface DashboardDTO {
  id: string
  title: string
  description?: string
  imageCoverUrl?: string
  createdAt?: Date
  status: DashboardVisibility
}

export default DashboardDTO

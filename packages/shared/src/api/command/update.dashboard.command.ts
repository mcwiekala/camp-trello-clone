import DashboardVisibility from '../DashboardVisibility'

export interface UpdateDashboardCommand {
  title?: string
  description?: string
  imageCoverUrl?: string
  status?: DashboardVisibility
  columns?: []
  idDashboard: string
}

export default UpdateDashboardCommand

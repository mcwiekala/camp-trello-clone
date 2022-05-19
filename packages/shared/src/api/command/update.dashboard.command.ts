import DashboardVisibility from '../DashboardVisibility'

interface UpdateColumnsCommand {
  title?: string
  order?: number
  tasks?: []
}
export interface UpdateDashboardCommand {
  title?: string
  description?: string
  imageCoverUrl?: string
  status?: DashboardVisibility
  columns?: [UpdateColumnsCommand]
}

export default UpdateDashboardCommand

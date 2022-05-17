import DashboardVisibility from '../DashboardVisibility'

export interface CreateDashboardCommand {
  title: string
  description: string
  imageCoverUrl: string
  status: DashboardVisibility
}

export default CreateDashboardCommand

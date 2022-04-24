import DashboardVisibility from '../DashboardVisibility'

export interface CreateDashboardCommand {
  title: string
  description: string
  coverImageUrl: string
  status: DashboardVisibility
}

export default CreateDashboardCommand

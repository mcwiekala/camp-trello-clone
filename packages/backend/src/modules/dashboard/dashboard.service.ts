import { CreateDashboardCommand } from 'shared'
import { dashboardRepository, DashboardRepository } from './dashboard.repository'
import { Dashboard } from './Dashboard'

export class DashboardService {
  private readonly dashboardRepository: DashboardRepository

  constructor(dashboardRepository: DashboardRepository) {
    console.log('DashboardService constructor')
    this.dashboardRepository = dashboardRepository
  }

  createDashboard(createDashboardCommand: CreateDashboardCommand): Promise<Dashboard> {
    console.log('Handling new dashboard')
    return dashboardRepository.createDashboard(createDashboardCommand)
  }

  getDashboards(): Promise<Dashboard[]> {
    return dashboardRepository.getDashboards()
  }

  getDashboard(_id: string): Promise<Dashboard> {
    return dashboardRepository.getDashboard(_id)
  }
}

const dashboardService = new DashboardService(dashboardRepository)
export { dashboardService }

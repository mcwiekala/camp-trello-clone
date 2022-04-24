import { CreateDashboardCommand } from 'packages/shared/src/api/dto/CreateDashboardCommand.dto'
import { dashboardRepository, DashboardRepository } from './dashboard.repository'
import { Dashboard } from './Dashboard'

export class DashboardService {
  private readonly dashboardRepository: DashboardRepository

  constructor(dashboardRepository: DashboardRepository) {
    console.log('DashboardService constructor')
    this.dashboardRepository = dashboardRepository
  }
  // eslint-disable-next-line class-methods-use-this
  createDashboard(createDashboardCommand: CreateDashboardCommand): Promise<Dashboard> {
    console.log('Handling new dashboard')
    return dashboardRepository.createDashboard(createDashboardCommand)
  }

  // eslint-disable-next-line class-methods-use-this
  getDashboards(): Promise<Dashboard[]> {
    return dashboardRepository.getDashboards()
  }

  // eslint-disable-next-line class-methods-use-this
  getDashboard(_id: string): Promise<Dashboard> {
    return dashboardRepository.getDashboard(_id)
  }
}

const dashboardService = new DashboardService(dashboardRepository)
export { dashboardService }

import { CreateDashboardCommand, UpdateDashboardCommand } from 'shared'
import { dashboardRepository, DashboardRepository } from './dashboard.repository'
import { Dashboard } from './dashboard'

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

  removeDashboardById(dashboardId: string): Promise<Dashboard> {
    return this.dashboardRepository.removeDashboardById(dashboardId)
  }

  updateDashboardById(
    updateDashboardCommand: UpdateDashboardCommand,
    _id: string
  ): Promise<Dashboard> {
    return this.dashboardRepository.updateDashboardById(updateDashboardCommand, _id)
  }
}

const dashboardService = new DashboardService(dashboardRepository)
export { dashboardService }

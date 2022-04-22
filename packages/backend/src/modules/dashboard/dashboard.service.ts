import CreateDashboardCommand from 'packages/shared/api/dto/CreateDashboardCommand'
import dashboardRepository from './dashboard.repository'

class DashboardService {
  // eslint-disable-next-line class-methods-use-this
  createDashboard(createDashboardCommand: CreateDashboardCommand) {
    console.log('Handling new dashboard')
    return dashboardRepository.createDashboard(createDashboardCommand)
  }

  // eslint-disable-next-line class-methods-use-this
  getDashboards() {
    return dashboardRepository.getDashboards()
  }

  // eslint-disable-next-line class-methods-use-this
  getDashboard(_id: string) {
    return dashboardRepository.getDashboard(_id)
  }
}

export default new DashboardService()

import { CreateDashboardCommand } from 'shared'
import express from 'express'
import DashboardDTO from 'packages/shared/src/api/dto/dashboard.dto'
import { dashboardService, DashboardService } from './dashboard.service'
import { dashboardMapper, DashboardMapper } from './dashboard.mapper'
import { Dashboard } from './dashboard'

class DashboardController {
  private readonly dashboardMapper: DashboardMapper
  private readonly dashboardService: DashboardService

  constructor(dashboardService: DashboardService, dashboardMapper: DashboardMapper) {
    this.dashboardMapper = dashboardMapper
    this.dashboardService = dashboardService
  }
  async createDashboard(req: express.Request, res: express.Response) {
    try {
      console.log(
        `DashboardController.createDashboard: Received new dashboard with title: ${req.body.title}`
      )
      const createDashboardCommand: CreateDashboardCommand = req.body
      console.log(createDashboardCommand)
      console.log(createDashboardCommand.columns[0].tasks[0].title)
      console.log(createDashboardCommand.users[0]._id)
      const dashboard: Dashboard = await dashboardService.createDashboard(createDashboardCommand)
      const dashboardDTO: DashboardDTO = this.dashboardMapper.mapToDto(dashboard)
      return res.status(201).send(dashboardDTO)
    } catch (error) {
      console.log('DashboardController: exception on save!')
      console.log(error)
      return res.status(400).send('Bad Request')
    }
  }

  async getDashboards(req: express.Request, res: express.Response) {
    const dashboards: Dashboard[] = await dashboardService.getDashboards()
    const dashboardsDTO: DashboardDTO[] = dashboards.map((dashboard: Dashboard) =>
      this.dashboardMapper.mapToDto(dashboard)
    )
    return res.status(200).json(dashboardsDTO)
  }

  async getDashboardById(req: express.Request, res: express.Response) {
    try {
      const dashboard: Dashboard = await dashboardService.getDashboard(req.params.id)
      console.log(dashboard)
      const dashboardDTO: DashboardDTO = this.dashboardMapper.mapToDto(dashboard)
      console.log(dashboardDTO)
      return res.status(200).json(dashboardDTO)
    } catch (e) {
      console.log(e)
      return res.status(400).send()
    }
  }

  async removeDashboardById(req: express.Request, res: express.Response) {
    const dashboard: Dashboard | null = await this.dashboardService.removeDashboardById(
      req.params.id
    )
    if (!dashboard) {
      return res.status(404).send('Dashboard not found.')
    }
    return res.status(200).send('Dashboard has been successfully removed.')
  }

  async updateDashboardById(req: express.Request, res: express.Response) {
    const updateDashboardCommand: DashboardDTO = req.body
    const updatedDashboard: Dashboard = await this.dashboardService.updateDashboardById(
      updateDashboardCommand,
      req.params.id
    )
    const updatedDashboardDto: DashboardDTO = this.dashboardMapper.mapToDto(updatedDashboard)
    return res.status(200).send(updatedDashboardDto)
  }
}

export default new DashboardController(dashboardService, dashboardMapper)

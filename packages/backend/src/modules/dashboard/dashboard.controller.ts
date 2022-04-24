import { CreateDashboardCommand } from 'packages/shared/src/api/dto/CreateDashboardCommand.dto'
import express from 'express'
import DashboardDTO from 'packages/shared/src/api/dto/dashboard.dto'
import { dashboardService, DashboardService } from './dashboard.service'
import { dashboardMapper, DashboardMapper } from './dashboard.mapper'
import { Dashboard } from './Dashboard'

class DashboardController {
  private readonly dashboardMapper: DashboardMapper
  private readonly dashboardService: DashboardService

  constructor(dashboardService: DashboardService, dashboardMapper: DashboardMapper) {
    this.dashboardMapper = dashboardMapper
    this.dashboardService = dashboardService
  }
  // eslint-disable-next-line class-methods-use-this
  async createDashboard(req: express.Request, res: express.Response) {
    console.log(`Received new dashboard with title: ${req.body.title}`)
    const createDashboardCommand: CreateDashboardCommand = req.body
    const dashboard: Dashboard = await dashboardService.createDashboard(createDashboardCommand)
    const dashboardDTO: DashboardDTO = this.dashboardMapper.mapToDto(dashboard)
    return res.status(201).send(dashboardDTO)
  }

  // eslint-disable-next-line class-methods-use-this
  async getDashboards(req: express.Request, res: express.Response) {
    const dashboards: Dashboard[] = await dashboardService.getDashboards()
    const dashboardsDTO: DashboardDTO[] = dashboards.map((dashboard: Dashboard) =>
      this.dashboardMapper.mapToDto(dashboard)
    )
    return res.status(200).json(dashboardsDTO)
  }

  // eslint-disable-next-line class-methods-use-this
  async getDashboard(req: express.Request, res: express.Response) {
    const dashboard: Dashboard = await dashboardService.getDashboard(req.params.id)
    const dashboardDTO: DashboardDTO = this.dashboardMapper.mapToDto(dashboard)
    return res.status(200).json(dashboardDTO)
  }
}

export default new DashboardController(dashboardService, dashboardMapper)

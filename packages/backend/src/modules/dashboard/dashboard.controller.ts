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
    console.log(
      `DashboardController.createDashboard: Received new dashboard with title: ${req.body.title}`
    )
    const createDashboardCommand: CreateDashboardCommand = req.body
    const dashboard: Dashboard = await dashboardService.createDashboard(createDashboardCommand)
    const dashboardDTO: DashboardDTO = this.dashboardMapper.mapToDto(dashboard)
    return res.status(201).send(dashboardDTO)
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
      const dashboardDTO: DashboardDTO = this.dashboardMapper.mapToDto(dashboard)
      return res.status(200).json(dashboardDTO)
    } catch (e) {
      console.log(e)
      return res.status(400).send()
    }
  }
}

export default new DashboardController(dashboardService, dashboardMapper)

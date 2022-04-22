import CreateDashboardCommand from 'packages/shared/src/api/dto/CreateDashboardCommand.dto'
import express from 'express'
import dashboardService from './dashboard.service'

class DashboardController {
  // eslint-disable-next-line class-methods-use-this
  async createDashboard(req: express.Request, res: express.Response) {
    console.log(`Received new dashboard with title: ${req.body.title}`)
    const createDashboardCommand: CreateDashboardCommand = req.body
    const Dashboard = await dashboardService.createDashboard(createDashboardCommand)
    return res.status(200).send(Dashboard.id)
  }

  // eslint-disable-next-line class-methods-use-this
  async getDashboards(req: express.Request, res: express.Response) {
    const Dashboard = await dashboardService.getDashboards()
    return res.status(200).json(Dashboard)
  }

  // eslint-disable-next-line class-methods-use-this
  async getDashboard(req: express.Request, res: express.Response) {
    const Dashboard = await dashboardService.getDashboard(req.params.id)
    return res.status(200).json(Dashboard)
  }
}

export default new DashboardController()

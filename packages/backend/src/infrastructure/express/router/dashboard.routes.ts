import express from 'express'
import { CommonRoutesConfig } from './common.routes.config'
import dashboardController from '../../../modules/dashboard/dashboard.controller'

// TODO change to value from config
const V1 = '/v1'

export class DashboardRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'DashboardRoutes')
  }

  // prettier-ignore
  configureRoutes(): express.Application {
    this.app
      .route(`${V1}/dashboards`)
      .get((req, res) => dashboardController.getDashboards(req, res))
      .post((req, res) => dashboardController.createDashboard(req, res))

    this.app
      .route(`${V1}/dashboards/:id`)
      .get((req, res) => dashboardController.getDashboardById(req, res))
      .delete((req, res) => dashboardController.removeDashboardById(req, res))

    return this.app
  }
}

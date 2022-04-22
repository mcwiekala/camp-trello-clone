import express from 'express'
import { CommonRoutesConfig } from './common.routes.config'
import dashboardController from '../../../modules/dashboard/dashboard.controller'

const V1 = '/v1'

export class DashboardRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'UsersRoutes')
  }

  // prettier-ignore
  configureRoutes(): express.Application {
    this.app
      .route(`${V1}/`)
      .get(
          (req: express.Request, res: express.Response) => res.send('Hello World!')
       );

    this.app
      .route(`${V1}/dashboards`)
      .get(
        dashboardController.getDashboards
      )

    this.app
      .route(`${V1}/create-dashboard`)
      .post(
        dashboardController.createDashboard
      )

    this.app
      .route(`${V1}/dashboard/:id`)
      .get(
        dashboardController.getDashboard
      )

    return this.app
  }
}

import express from 'express'
import { CommonRoutesConfig } from './common.routes.config'
import boardController from '../../../modules/board/board.controller'

const V1 = '/v1'

export class BoardRoutes extends CommonRoutesConfig {
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
          boardController.getDashboards
      )

    this.app
      .route(`${V1}/create-dashboard`)
      .post(
        boardController.createDashboard
      )

    this.app
      .route(`${V1}/dashboard/:id`)
      .get(
        boardController.getDashboard
      )

    return this.app
  }
}

import express from 'express'
import { CommonRoutesConfig } from './common.routes.config'
import userController from '../../../modules/user/user.controller'

const apiVersionPrefix = `/${process.env.API_VERSION || 'v1'}`

export class UserRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'UserRoutes')
  }

  // prettier-ignore
  configureRoutes(): express.Application {

    this.app
      .route(`${apiVersionPrefix}/users`)
      .get((req, res) => userController.getAll(req, res))
      .post((req, res) => userController.create(req, res))

    this.app
      .route(`${apiVersionPrefix}/users/:userId`)
      .get((req, res) => userController.getOneById(req, res))
      .patch((req, res) => userController.updateOneById(req, res))
      .delete((req, res) => userController.deleteOneById(req, res))

    return this.app
  }
}

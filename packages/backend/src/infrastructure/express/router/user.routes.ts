import express from 'express'
import { CommonRoutesConfig } from './common.routes.config'
import userController from '../../../modules/user/user.controller'

const V1 = '/v1'

export class UserRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'UserRoutes')
  }

  // prettier-ignore
  configureRoutes(): express.Application {

    this.app
      .route(`${V1}/users`)
      .get(userController.getMany)
      .post(userController.create)

    this.app
      .route(`${V1}/users/:userId`)
      .get(userController.getOne)
      .patch(userController.patch)
      .delete(userController.delete)

    return this.app
  }
}

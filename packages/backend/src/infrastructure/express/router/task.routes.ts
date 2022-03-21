import express from 'express'
import { CommonRoutesConfig } from './common.routes.config'
import _usersController from '../../../modules/task/Task.controller'

export class TaskRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'UsersRoutes')
  }

  // prettier-ignore
  configureRoutes(): express.Application {
    this.app
    .route('/tasks')
    .post(
        _usersController.createTask
    );

    return this.app
  }
}

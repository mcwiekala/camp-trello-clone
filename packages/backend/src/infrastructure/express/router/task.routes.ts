import express from 'express'
import { CommonRoutesConfig } from './common.routes.config'
import JwtGuard from '../../../application/authentication/jwt.guard'
import taskController from '../../../modules/task/task.controller'

const V1 = '/v1'

export class TaskRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'TaskRoutes')
  }

  // prettier-ignore
  configureRoutes(): express.Application {
    this.app
    .route(`${V1}/`)
    .get(
        (req: express.Request, res: express.Response) => res.send('Helo World!')
    );

    this.app
      .route(`${V1}/tasks`)
      .get(JwtGuard, (req, res) => taskController.findAll(req, res))
      .post(JwtGuard, (req, res) => taskController.createTask(req, res))

    this.app
      .route(`${V1}/tasks/:taskId`)
      .get(JwtGuard, (req, res) => taskController.findById(req, res))
      .delete(JwtGuard, (req, res) => taskController.removeById(req, res))
      .patch(JwtGuard, (req, res) => taskController.updateById(req, res))
    return this.app
  }
}

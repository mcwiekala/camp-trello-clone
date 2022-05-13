# Securing routes with Passport.js

`JwtGuard` shall be used as a normal controller.

## Example

```ts
import JwtGuard from '../../../application/authentication/jwt.guard'

export class TaskRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'TaskRoutes')
  }

  configureRoutes(): express.Application {
    this.app
      .route(`${V1}/`)
      .get((req: express.Request, res: express.Response) => res.send('Helo World!'))

    this.app
      .route(`${V1}/tasks`)
      .get(JwtGuard, (req, res) => taskController.findAll(req, res))
      .post(JwtGuard, (req, res) => taskController.createTask(req, res))

    this.app
      .route(`${V1}/tasks/:taskId`)
      .get(JwtGuard, (req, res) => taskController.findById(req, res))
      .delete(JwtGuard, (req, res) => taskController.removeById(req, res))

    return this.app
  }
}
```

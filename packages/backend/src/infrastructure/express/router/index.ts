import express, { Request } from 'express'
import passport from 'passport'
import 'dotenv/config'
import { encodeData, userDataType } from '../../../application/authentication/jwt.strategy'

const { FRONT_PORT } = process.env

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hello World')
})

interface Req extends Request {
  user?: Partial<userDataType> | undefined
}

function instanceOfUserDataType(data: Partial<userDataType>): data is userDataType {
  return 'email' in data && '_id' in data
}

router.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login'
  }),
  (req: Req, res) => {
    if (req.user && instanceOfUserDataType(req.user)) {
      const token = encodeData(req.user)
      res.setHeader('Authentication', token)
      res.redirect(`http://localhost:${FRONT_PORT}/auth/${token}`)
    } else {
      res.status(504).send('Token could not be retrieved!')
    }
  }
)

router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['email', 'profile']
  })
)

export default router

import express from 'express'
import passport from 'passport'
import 'dotenv/config'

const { FRONT_PORT } = process.env

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hello World')
})

router.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: `http://localhost:${FRONT_PORT}/dashboards`,
    failureRedirect: '/login'
  })
)

router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['email', 'profile']
  })
)

export default router

import express from 'express'
import passport from 'passport'
import 'dotenv/config'
import { encodeData } from '../../../application/authentication/jwt.strategy'

const { FRONT_PORT } = process.env

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hello World')
})

router.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login'
  }),
  (req, res) => {
    const token = encodeData(req.user)
    res.setHeader('Authentication', token)
    res.redirect(`http://localhost:${FRONT_PORT}/auth/${token}`)
  }
)

router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['email', 'profile']
  })
)

export default router

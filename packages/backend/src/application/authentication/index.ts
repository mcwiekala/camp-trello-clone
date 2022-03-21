/* eslint-disable no-console */
import 'dotenv/config'
import passport from 'passport'
import type express from 'express'
import { Profile, Strategy, VerifyCallback } from 'passport-google-oauth20'
import User from '../../modules/user/User'

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID ?? ''
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET ?? ''
const CALLBACK_URL = process.env.CALLBACK_URL ?? ''

type verifyFuncParams = [
  req: express.Request,
  accessToken: string,
  refreshToken: string,
  profile: Profile,
  done: VerifyCallback
]

export const strat = async (...[req, accessToken, refreshToken, profile, cb]: verifyFuncParams) => {
  console.log('req', req, 'access', accessToken, 'refresh', refreshToken)
  console.log('User:', profile)
  const usr = new User({
    username: profile.displayName,
    googleId: profile.id,
    avatarUrl: profile.photos ? profile.photos[0].value : ''
  })
  const newUser = await usr.save()

  cb(null, JSON.stringify(newUser))
}

passport.use(
  new Strategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: CALLBACK_URL,
      passReqToCallback: true
    },
    strat
  )
)

passport.serializeUser((user, done) => {
  console.log('Serialize User:', user)
  done(null, user)
})

passport.deserializeUser((user, done) => {
  console.log('Deserialize User:', user)
  done(null, user as typeof User)
})

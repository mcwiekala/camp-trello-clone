/* eslint-disable no-console */
import 'dotenv/config'
import passport from 'passport'
import type express from 'express'
import { Profile, Strategy, VerifyCallback } from 'passport-google-oauth20'
import User from '../../modules/user/user.model'

export const googleCallbackURL = '/auth/google/callback'

if (process.env.GOOGLE_CLIENT_ID === undefined) {
  throw new Error('GOOGLE_CLIENT_ID not specified in .env')
}
if (process.env.GOOGLE_CLIENT_SECRET === undefined) {
  throw new Error('GOOGLE_CLIENT_SECRET not specified in .env')
}

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env

type verifyFuncParams = [
  req: express.Request,
  accessToken: string,
  refreshToken: string,
  profile: Profile,
  done: VerifyCallback
]

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const strat = async (...[req, accessToken, refreshToken, profile, cb]: verifyFuncParams) => {
  const userFromDatabase = await User.findOne({ googleId: profile.id }).exec()

  if (userFromDatabase) {
    cb(null, JSON.stringify(userFromDatabase))

    return
  }

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
      callbackURL: `v1/${googleCallbackURL}`,
      passReqToCallback: true
    },
    strat
  )
)

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((user, done) => {
  done(null, user as typeof User)
})

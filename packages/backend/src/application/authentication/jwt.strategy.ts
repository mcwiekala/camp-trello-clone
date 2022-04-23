import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import passport from 'passport'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

import User from '../../modules/user/User'

const { SESSION_SECRET = '' } = process.env

const strategyConfig = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SESSION_SECRET
}

passport.use(
  new JwtStrategy(strategyConfig, async (payload, done) => {
    let userFromDatabase
    try {
      userFromDatabase = await User.findOne({ googleId: payload.googleId }).exec()
    } catch (error) {
      done(error, false)
    }

    if (userFromDatabase) {
      done(null, userFromDatabase)

      return
    }

    done(null, false)
  })
)

// export type userDataType = {
//   _id: string
//   email: string
//   expiresIn: string
// }

export const encodeData = (userData: any) => {
  const token = jwt.sign(
    {
      expiresIn: '12h',
      id: userData._id,
      email: userData.email
    },
    SESSION_SECRET
  )

  return token
}

import passport from 'passport'

const JwtGuard = () => passport.authenticate('jwt', { session: false })

export default JwtGuard

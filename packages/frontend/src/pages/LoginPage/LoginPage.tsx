import useStyles from './style'
import LoginGoogleButton from '../../components/LoginGoogleButton/LoginGoogleButton'

const LoginPage = () => {
  const { classes } = useStyles()

  return (
    <main className={classes.container}>
      <article className={classes.box}>
        <LoginGoogleButton
          onClick={() => window.location.assign('http://localhost:8800/v1/auth/google')}
        >
          Login with Google
        </LoginGoogleButton>
      </article>
    </main>
  )
}

export default LoginPage

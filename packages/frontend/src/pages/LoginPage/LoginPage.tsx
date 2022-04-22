// import { useNavigate } from 'react-router-dom'
import useStyles from './style'
import LoginGoogleButton from '../../components/LoginGoogleButton/LoginGoogleButton'

const LoginPage = () => {
  const { classes } = useStyles()
  // const navigate = useNavigate()

  return (
    <main className={classes.container}>
      <article className={classes.box}>
        <LoginGoogleButton
          onClick={() => window.location.assign('https://localhost:3000/v1/auth/google')}
        >
          Login with Google
        </LoginGoogleButton>
      </article>
    </main>
  )
}

export default LoginPage

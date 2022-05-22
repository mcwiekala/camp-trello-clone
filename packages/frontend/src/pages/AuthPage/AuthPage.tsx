import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import http from '../../infrastructure/HttpService/HttpService'
import useStyles from './style'
import { AppContext } from '../../contexts/AppStateContext'

const AuthPage = () => {
  const { classes } = useStyles()
  const navigate = useNavigate()
  const [, setAppState] = useContext(AppContext)
  const { token } = useParams()

  useEffect(() => {
    if (token) {
      http.setToken(token)
      setAppState({ token })
    }
    navigate('../dashboards', { replace: true })
  }, [token, navigate, setAppState])

  return (
    <main className={classes.container}>
      <h1>Wait while you&apos;re redirected to the site</h1>
    </main>
  )
}

export default AuthPage

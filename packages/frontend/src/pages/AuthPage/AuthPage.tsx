import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import http from '../../infrastructure/HttpService/HttpService'
import useStyles from './style'

const AuthPage = () => {
  const { classes } = useStyles()
  const navigate = useNavigate()
  const { token } = useParams()

  useEffect(() => {
    if (token) {
      http.setToken(token)
    }
    navigate('../dashboards', { replace: true })
  }, [token, navigate])

  // const loginTroughOAuth = () => {
  // }

  return (
    <main className={classes.container}>
      <h1>Wait while you&apos;re redirected to the site</h1>
    </main>
  )
}

export default AuthPage

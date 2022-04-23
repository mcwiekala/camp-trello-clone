import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import http from '../../infrastructure/HttpService/HttpService'
import useStyles from './style'

const AuthPage = () => {
  const { classes } = useStyles()
  const navigate = useNavigate()
  const { token } = useParams()

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  useEffect(() => {
    if (token) {
      http.setToken(token)
      console.log(http.http.token)
      // await http.getTask('6225239aa76ad13dd37178b6')
    }
    console.log('Auth', token)
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

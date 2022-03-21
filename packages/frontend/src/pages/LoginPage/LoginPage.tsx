// Components
import { Image, Button } from '@mantine/core'

// Misc
import googleLogo from '../../images/btn_google_light_normal_ios.svg'
import useStyles from './style'

const LoginPage = () => {
  const { classes } = useStyles()

  return (
    <main className={classes.container}>
      <article className={classes.box}>
        <Button
          component="a"
          href="localhost:3000/v1/auth/google"
          target="_blank"
          className={classes.btn}
          leftIcon={<Image src={googleLogo} fit="cover" />}
        >
          Sign in with Google
        </Button>
      </article>
    </main>
  )
}

export default LoginPage

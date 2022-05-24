/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable arrow-body-style */
import { Select } from '@mantine/core'
import { UserDTO } from 'shared'
import { AiFillCaretDown } from 'react-icons/ai'
import { IoApps } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { routes } from '../../routes/RoutesDashboards'
import GrayButtonFilled from '../GrayButtonFilled/GrayButtonFilled'
import useStyles from './styles'
import thulloLogo from '../../images/thullo_logo.png'
import LoginGoogleButton from '../LoginGoogleButton/LoginGoogleButton'

export type NavbarProps = { username: any; boardTitle?: string }

const Navbar = ({ boardTitle, username }: NavbarProps) => {
  const { classes } = useStyles()
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbar__logo}>
        <img src={thulloLogo} width="32px" height="29px" alt="Thullo logo" />
        <h1>Thullo</h1>
      </div>
      {boardTitle && (
        <div className={classes.navbar__dashboard}>
          <h2>{boardTitle}</h2>
          <div />
          {!!token && (
            <GrayButtonFilled onClick={() => navigate(routes.dashboards)} leftIcon={<IoApps />}>
              All boards
            </GrayButtonFilled>
          )}
        </div>
      )}
      <div className={classes.navbar__options}>
        {token ? (
          <GrayButtonFilled onClick={() => logout()}>Logout</GrayButtonFilled>
        ) : (
          <LoginGoogleButton
            onClick={() => window.location.assign('http://localhost:8800/v1/auth/google')}
          >
            Login with Google
          </LoginGoogleButton>
        )}
      </div>
    </nav>
  )
}

export default Navbar

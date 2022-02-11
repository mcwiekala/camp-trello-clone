/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable arrow-body-style */
import { Select } from '@mantine/core'
import { AiFillCaretDown } from 'react-icons/ai'
import { IoApps } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { RandomUserType } from '../../logic/randomUser'
import { routes } from '../../routes/RoutesDashboards'
import GrayButtonFilled from '../GrayButtonFilled/GrayButtonFilled'
import SearchBar from '../SearchBar/SearchBar'
import useStyles from './styles'
import thulloLogo from '../../images/thullo_logo.png'

export type NavbarProps = {
  loggedUser: RandomUserType
  boardTitle?: string
}

const Navbar = ({ boardTitle, loggedUser }: NavbarProps) => {
  const { classes } = useStyles()
  const navigate = useNavigate()

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
          <GrayButtonFilled onClick={() => navigate(routes.dashboards)} leftIcon={<IoApps />}>
            All boards
          </GrayButtonFilled>
        </div>
      )}
      <div className={classes.navbar__options}>
        <SearchBar
          onKeywordChangeHandler={() => {}}
          size="sm"
          actionType="button"
          wrapperProps={{ width: '300px' }}
        />
        <Select
          classNames={{
            wrapper: classes.navbar__options__select__wrapper,
            input: classes.navbar__options__select__input,
            icon: classes.navbar__options__select__icon,
            rightSection: classes.navbar__options__select__rightSection
          }}
          placeholder={loggedUser.username}
          data={[
            { value: 'react', label: 'Option1' },
            { value: 'vue', label: 'Option2' }
          ]}
          icon={<img src={loggedUser.profilePictureURL} alt="user avatar" />}
          rightSection={<AiFillCaretDown />}
        />
      </div>
    </nav>
  )
}

export default Navbar

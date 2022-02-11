import { Image, Text } from '@mantine/core'
import PropTypes from 'prop-types'
import UserIconList from '../UserIconList/UserIconList'
import useStyles from './style'

export const Dashboard = ({ title, imageCoverUrl, users, onClickHandler }) => {
  const { classes } = useStyles()

  return (
    <div
      className={classes.dashboardMain}
      onClick={onClickHandler}
      onKeyUp={(e) => {
        if (e.which === 13) {
          onClickHandler()
        }
      }}
      role="button"
      tabIndex={0}
    >
      <Image src={imageCoverUrl} alt="cover" fit="cover" radius="md" />
      <Text className={classes.title}>{title}</Text>
      <div className={classes.userList}>
        <UserIconList listOfUsers={users} isAppendable={false} iconLimit={3} displayNumberOfUsers />
      </div>
    </div>
  )
}
Dashboard.propTypes = {
  title: PropTypes.string,
  imageCoverUrl: PropTypes.string,
  users: PropTypes.instanceOf(Array),
  onClickHandler: PropTypes.func
}

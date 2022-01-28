import { Image, Text } from '@mantine/core'
import PropTypes from 'prop-types'
import UserIconList from '../UserIconList/UserIconList'
import useStyles from './style'

export const Dashboard = ({ title, coverImageURL, users, onClickHandler }) => {
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
      <Image src={coverImageURL} alt="cover" fit="cover" radius="md" />
      <Text className={classes.title}>{title}</Text>
      <div className={classes.userList}>
        <UserIconList listOfUsers={users} isAppendable={false} iconLimit={3} />
      </div>
    </div>
  )
}
Dashboard.propTypes = {
  title: PropTypes.string,
  coverImageURL: PropTypes.string,
  users: PropTypes.instanceOf(Array),
  onClickHandler: PropTypes.func
}

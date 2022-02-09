import { ActionIcon, Text } from '@mantine/core'
import { MdAdd } from 'react-icons/md'
import PropTypes from 'prop-types'
import UserIcon from '../UserIcon/UserIcon'
import useStyles from './style'

const UserIconList = ({ listOfUsers, isAppendable, onAppendHandler, iconLimit }) => {
  const { classes } = useStyles()
  const isAboveLimit = listOfUsers.length > iconLimit
  const numberAboveLimit = listOfUsers.length - iconLimit
  return (
    <div className={classes.userIconList}>
      {listOfUsers.slice(0, iconLimit).map((user) => (
        <UserIcon key={user.id} username={user.username} imgUrl={user.profilePictureURL} />
      ))}
      {isAboveLimit ? <Text size="sm" color="gray">{`+ ${numberAboveLimit} others`}</Text> : null}
      {isAppendable ? (
        <ActionIcon variant="filled" size={28} color="blue" radius="md" onClick={onAppendHandler}>
          <MdAdd size={30} />
        </ActionIcon>
      ) : null}
    </div>
  )
}
UserIconList.propTypes = {
  listOfUsers: PropTypes.instanceOf(Array),
  isAppendable: PropTypes.bool,
  onAppendHandler: PropTypes.func,
  iconLimit: PropTypes.number
}

export default UserIconList

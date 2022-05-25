import { ActionIcon, Text } from '@mantine/core'
import { MdAdd } from 'react-icons/md'
import { UserDTO } from 'shared'
import UserIcon from '../UserIcon/UserIcon'
import UserType from '../../types/user'
import useStyles from './style'

type UserIconListProps = {
  listOfUsers: UserDTO[]
  isAppendable: boolean
  onAppendHandler?: () => void
  iconLimit: number
  displayNumberOfUsers: boolean
}

const UserIconList = ({
  listOfUsers,
  isAppendable,
  onAppendHandler,
  iconLimit,
  displayNumberOfUsers
}: UserIconListProps) => {
  const { classes } = useStyles()
  const isAboveLimit = listOfUsers.length > iconLimit
  const numberAboveLimit = listOfUsers.length - iconLimit

  return (
    <div className={classes.userIconList}>
      {listOfUsers.slice(0, iconLimit).map((user) => (
        <UserIcon key={user._id} username={user.username} imgUrl={user.avatarUrl} />
      ))}
      {displayNumberOfUsers && isAboveLimit ? (
        <Text size="sm" color="gray">{`+ ${numberAboveLimit} others`}</Text>
      ) : null}
      {isAppendable ? (
        <ActionIcon variant="filled" size={28} color="blue" radius="md" onClick={onAppendHandler}>
          <MdAdd size={30} />
        </ActionIcon>
      ) : null}
    </div>
  )
}

export default UserIconList

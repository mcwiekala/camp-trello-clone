import { Text } from '@mantine/core'
import { UserDTO } from 'shared'
import { HiUsers } from 'react-icons/hi'
import UserIcon from '../UserIcon/UserIcon'
import RedButton from '../RedButton/RedButton'
import UserType from '../../types/user'
import useStyles from './style'

type MembersListProps = {
  title?: string
  membersList: UserDTO[]
  onDeleteHandler: (id: string) => void
  isDeletable?: boolean
}

const ADMIN_ROLE = 'Admin'

const MembersList = ({ membersList, onDeleteHandler, isDeletable, title }: MembersListProps) => {
  const { classes } = useStyles()

  const getRemoveButton = (role: string | undefined, id: string) => {
    if (isDeletable) {
      if (role === ADMIN_ROLE) {
        return <Text className={classes.admin}>Admin</Text>
      }
      return <RedButton onClick={() => onDeleteHandler(id)}>Remove</RedButton>
    }
    return undefined
  }

  return (
    <div>
      <header className={classes.membersListHeader}>
        <HiUsers className={classes.title} />
        <Text className={classes.title}>{title || 'Members'}</Text>
      </header>
      <section>
        {membersList.map(({ username, id, avatarUrl }) => (
          <section className={classes.memberSection} key={id}>
            <UserIcon imgUrl={avatarUrl} username={username} />
            <Text className={classes.username}>{username}</Text>
            {getRemoveButton(ADMIN_ROLE, id)}
          </section>
        ))}
      </section>
    </div>
  )
}
export default MembersList

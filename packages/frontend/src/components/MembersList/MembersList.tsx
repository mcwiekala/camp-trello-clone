import { Text } from '@mantine/core'
import { HiUsers } from 'react-icons/hi'
import UserIcon from '../UserIcon/UserIcon'
import RedButton from '../RedButton/RedButton'
import UserType from '../../types/user'
import useStyles from './style'

type MembersListProps = {
  title?: string
  membersList: UserType[]
  onDeleteHandler: (id: string) => void
  isDeletable?: boolean
}

const MembersList = ({ membersList, onDeleteHandler, isDeletable, title }: MembersListProps) => {
  const { classes } = useStyles()

  const getRemoveButton = (role: string | undefined, id: string) => {
    if (isDeletable) {
      if (role === 'Admin') {
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
        {membersList.map(({ username, id, profilePictureURL, role }) => (
          <section className={classes.memberSection} key={id}>
            <UserIcon imgUrl={profilePictureURL} username={username} />
            <Text className={classes.username}>{username}</Text>
            {getRemoveButton(role, id)}
          </section>
        ))}
      </section>
    </div>
  )
}
export default MembersList

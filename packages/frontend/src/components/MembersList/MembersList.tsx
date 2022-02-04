import { Text } from '@mantine/core'
import { HiUsers } from 'react-icons/hi'
import UserIcon from '../UserIcon/UserIcon'
import RedButton from '../RedButton/RedButton'
import useStyles from './style'
import { RandomUserType } from '../../logic/randomUser'

type MembersListProps = {
  title?: string
  membersList: RandomUserType[]
  onDeleteHandler: (id: string) => void
  isDeletable?: boolean
}

const MembersList = ({ membersList, onDeleteHandler, isDeletable, title }: MembersListProps) => {
  const { classes } = useStyles()
  function showButtons(role: string | undefined, id: string) {
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
            {showButtons(role, id)}
          </section>
        ))}
      </section>
    </div>
  )
}
export default MembersList

import { Text } from '@mantine/core'
import { HiUsers } from 'react-icons/hi'
import { UserDTO } from 'shared'
import UserIcon from '../UserIcon/UserIcon'
import RedButton from '../RedButton/RedButton'
import useStyles from './style'

type MembersListProps = {
  title?: string
  membersList: UserDTO[]
  onDeleteHandler: (id: string) => void
  isDeletable?: boolean
}

const MembersList = ({ membersList, onDeleteHandler, isDeletable, title }: MembersListProps) => {
  const { classes } = useStyles()

  // No roles in users
  // const getRemoveButton = (id: string) => {
  //   if (isDeletable) {
  //     if (role === 'Admin') {
  //       return <Text className={classes.admin}>Admin</Text>
  //     }
  //     return <RedButton onClick={() => onDeleteHandler(id)}>Remove</RedButton>
  //   }
  //   return undefined
  // }

  return (
    <div>
      <header className={classes.membersListHeader}>
        <HiUsers className={classes.title} />
        <Text className={classes.title}>{title || 'Members'}</Text>
      </header>
      <section>
        {membersList.map(({ username, id, avatarUrl, email }) => (
          <section className={classes.memberSection} key={id}>
            <UserIcon imgUrl={avatarUrl} username={username} />
            <Text className={classes.username}>{username}</Text>
            {/* 
            No roles in users
            {getRemoveButton(id)} */}
          </section>
        ))}
      </section>
    </div>
  )
}
export default MembersList

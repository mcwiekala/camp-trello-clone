import { Text } from '@mantine/core'
import { HiUsers } from 'react-icons/hi'
import UserIcon from '../UserIcon/UserIcon'
import RedButton from '../RedButton/RedButton'
import useStyles from './style'

type MembersListProps = {
  membersList: {
    username: string
    role?: string
    id: string
    imgUrl?: string
  }[]
  onDeleteHandler: (e?: React.MouseEvent<HTMLElement>) => void
  isDeletable?: boolean
}

const MembersList = ({ membersList, onDeleteHandler, isDeletable }: MembersListProps) => {
  const { classes } = useStyles()
  function showButtons(role: string | undefined) {
    if (isDeletable) {
      if (role === 'admin') {
        return <Text className={classes.admin}>Admin</Text>
      }
      return <RedButton onClick={onDeleteHandler}>Remove</RedButton>
    }
    return undefined
  }
  return (
    <div>
      <header className={classes.membersListHeader}>
        <HiUsers className={classes.title} />
        <Text className={classes.title}>Members</Text>
      </header>
      <section>
        {membersList.map(({ imgUrl, username, id, role }) => (
          <section className={classes.memberSection} key={id}>
            <UserIcon imgUrl={imgUrl} username={username} />
            <Text className={classes.username}>{username}</Text>
            {showButtons(role)}
          </section>
        ))}
      </section>
    </div>
  )
}
export default MembersList

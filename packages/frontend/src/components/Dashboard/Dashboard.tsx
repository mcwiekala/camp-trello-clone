import { Image, Text } from '@mantine/core'
import { UserDTO } from 'shared'
import UserIconList from '../UserIconList/UserIconList'
import UserType from '../../types/user'
import useStyles from './style'

type DashboardProps = {
  title: string
  imageCoverUrl: string
  users: UserDTO[]
  onClickHandler: () => void
}

export const Dashboard = ({ title, imageCoverUrl, users, onClickHandler }: DashboardProps) => {
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
      <Image src={imageCoverUrl} width={300} height={200} alt="cover" fit="cover" radius="md" />
      <Text className={classes.title}>{title}</Text>
      <div className={classes.userList}>
        <UserIconList listOfUsers={users} isAppendable={false} iconLimit={3} displayNumberOfUsers />
      </div>
    </div>
  )
}

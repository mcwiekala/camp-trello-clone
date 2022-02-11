import { Avatar } from '@mantine/core'
import { getUserNameInitials } from '../../utils/getUserNameInitials'
import useStyles from './style'

type UserIconProps = {
  username: string
  imgUrl?: string
}

const UserIcon = ({ username, imgUrl }: UserIconProps) => {
  const { classes } = useStyles()

  return (
    <Avatar classNames={{ placeholder: classes.placeholder }} src={imgUrl} radius="md" size={28}>
      {!imgUrl && getUserNameInitials(username)}
    </Avatar>
  )
}
export default UserIcon

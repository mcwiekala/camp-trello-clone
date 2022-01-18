import { Avatar } from '@mantine/core'
import useStyles from './style'

type UserIconProps = {
  children: string
  imgUrl?: string
}

const UserIcon = ({ children, imgUrl }: UserIconProps) => {
  const { classes } = useStyles()
  return (
    <Avatar classNames={{ placeholder: classes.placeholder }} src={imgUrl} radius="md">
      {`${children.split(' ')[0][0].toUpperCase()}${
        children.split(' ')[1][0] ? children.split(' ')[1][0].toUpperCase() : ''
      }`}
    </Avatar>
  )
}
export default UserIcon

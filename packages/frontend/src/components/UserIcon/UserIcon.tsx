import { Avatar } from '@mantine/core'
import useStyles from './style'

type UserIconProps = {
  username: string
  imgUrl?: string
}

const UserIcon = ({ username, imgUrl }: UserIconProps) => {
  const { classes } = useStyles()
  function getUserNameInitials(name: string) {
    const firstLetters = name.match(/\b(\w)/g) // ['j','D']
    return firstLetters?.join('')
  }
  return (
    <Avatar classNames={{ placeholder: classes.placeholder }} src={imgUrl} radius="md" size={28}>
      {!imgUrl && getUserNameInitials(username)}
    </Avatar>
  )
}
export default UserIcon

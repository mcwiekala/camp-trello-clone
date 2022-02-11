import { Button } from '@mantine/core'
import useStyles from './style'

const ButtonComment = ({ onClickEvent, children }) => {
  const { classes } = useStyles()

  return (
    <Button
      onClick={onClickEvent}
      classNames={{ subtle: classes.buttonSubtle }}
      variant="subtle"
      size="xs"
      compact
    >
      {children}
    </Button>
  )
}
export default ButtonComment

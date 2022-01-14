import { Button } from '@mantine/core'
import useStyles from './Style'

const ButtonComment = ({ onClickEvent, text }) => {
  const { classes } = useStyles()
  return (
    <Button
      onClick={onClickEvent}
      classNames={{ root: classes.ButtonOutline }}
      variant="outline"
      size="xs"
      compact
    >
      {text}
    </Button>
  )
}
export default ButtonComment

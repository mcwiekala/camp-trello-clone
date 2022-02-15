import { Button } from '@mantine/core'
import useStyles from './style'

type ButtonCommentProps = {
  onClickEvent: () => void
  children: React.ReactNode
}

const ButtonComment = ({ onClickEvent, children }: ButtonCommentProps) => {
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

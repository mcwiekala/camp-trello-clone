import { Button, Textarea } from '@mantine/core'
import { getHotkeyHandler } from '@mantine/hooks'
import useStyles from './style'

const CommentInput = ({ onValueChangedHandler, onSubmitHandler, value }) => {
  const { classes } = useStyles()

  return (
    <div className={classes.commentMain}>
      <Textarea
        placeholder="Write a comment ..."
        variant="unstyled"
        size="md"
        onChange={(event) => onValueChangedHandler(event.target.value)}
        value={value}
        onKeyDown={getHotkeyHandler([['shift+Enter', onSubmitHandler]])}
      />
      <Button compact className={classes.button} onClick={onSubmitHandler}>
        Save
      </Button>
    </div>
  )
}
export default CommentInput

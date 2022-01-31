import { Button, Textarea } from '@mantine/core'
import useStyles from './style'

const CommentInput = (onValueChangedHandler, onSubmitHandler) => {
  const { classes } = useStyles()
  return (
    <div className={classes.commentMain}>
      <Textarea
        placeholder="Write a comment ..."
        variant="unstyled"
        size="md"
        onChange={(event) => onValueChangedHandler(event.target.value)}
      />
      <Button compact className={classes.button} onClick={onSubmitHandler}>
        Save
      </Button>
    </div>
  )
}
export default CommentInput

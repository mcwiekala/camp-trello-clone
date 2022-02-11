import { Button, Textarea } from '@mantine/core'
import { getHotkeyHandler } from '@mantine/hooks'
import useStyles from './style'

type CommentInput = {
  value: string
  onSubmitHandler: () => void
  onValueChangedHandler: (value: string) => void
}

const CommentInput = ({ onValueChangedHandler, onSubmitHandler, value }: CommentInput) => {
  const { classes } = useStyles()

  return (
    <div className={classes.commentMain}>
      <Textarea
        placeholder="Write a comment ..."
        variant="unstyled"
        size="md"
        onChange={
          (e: React.ChangeEvent<HTMLTextAreaElement>) => onValueChangedHandler(e.target.value)
          // eslint-disable-next-line react/jsx-curly-newline
        }
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

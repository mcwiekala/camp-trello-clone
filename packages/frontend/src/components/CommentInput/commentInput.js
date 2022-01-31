import { useState } from 'react'
import { Button, Textarea } from '@mantine/core'
import useStyles from './style'

const CommentInput = (onSubmitHandler) => {
  const { classes } = useStyles()
  const [currentContent, setCurrentContent] = useState(textContent)
  return (
    <div className={classes.commentMain}>
      <Textarea
        placeholder="Write a comment ..."
        variant="unstyled"
        size="md"
        onChange={(event) => setCurrentContent(event.target.value)}
      >
        {currentContent}
      </Textarea>
      <Button compact className={classes.button} onClick={onSubmitHandler(currentContent)}>
        Save
      </Button>
    </div>
  )
}
export default CommentInput

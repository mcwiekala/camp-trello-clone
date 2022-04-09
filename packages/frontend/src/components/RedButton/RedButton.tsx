import { Button } from '@mantine/core'
import type { ButtonProps } from '@mantine/core'
import useStyles from './style'

const RedButton = ({ children, onClick, rightIcon }: ButtonProps<'button'>) => {
  const { classes } = useStyles()

  return (
    <Button
      radius="md"
      onClick={onClick}
      variant="outline"
      color="red"
      rightIcon={rightIcon}
      className={classes.RedButton}
    >
      {children}
    </Button>
  )
}
export default RedButton

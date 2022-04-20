import { Button } from '@mantine/core'
import type { ButtonProps } from '@mantine/core'
import useStyles from './style'

const RedButton = ({ children, ...rest }: ButtonProps<'button'>) => {
  const { classes } = useStyles()

  return (
    <Button radius="md" variant="outline" color="red" className={classes.RedButton} {...rest}>
      {children}
    </Button>
  )
}
export default RedButton

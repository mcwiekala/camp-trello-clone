import { Button } from '@mantine/core'
import type { ButtonProps } from '@mantine/core'
import useStyles from './style'

const GrayButtonFilled = ({ children, ...rest }: ButtonProps<'button'>) => {
  const { classes } = useStyles()
  return (
    <Button radius="md" classNames={{ root: classes.root, inner: classes.inner }} {...rest}>
      {children}
    </Button>
  )
}
export default GrayButtonFilled

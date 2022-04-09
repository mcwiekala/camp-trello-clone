import { Button } from '@mantine/core'
import type { ButtonProps } from '@mantine/core'
import useStyles from './style'

const GrayButtonFilled = ({ children, onClick, rightIcon, leftIcon }: ButtonProps<'button'>) => {
  const { classes } = useStyles()
  return (
    <Button
      radius="md"
      onClick={onClick}
      leftIcon={leftIcon}
      classNames={{ root: classes.root, inner: classes.inner }}
      rightIcon={rightIcon}
    >
      {children}
    </Button>
  )
}
export default GrayButtonFilled

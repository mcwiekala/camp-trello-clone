import { Button } from '@mantine/core'
import type { ButtonProps } from '@mantine/core'
import useStyles from './style'

const BlueButton = ({ children, onClick, rightIcon, leftIcon, ...rest }: ButtonProps<'button'>) => {
  const { classes } = useStyles()

  return (
    <Button
      radius="md"
      onClick={onClick}
      variant="outline"
      rightIcon={rightIcon}
      leftIcon={leftIcon}
      classNames={{ root: classes.root, inner: classes.inner }}
      {...rest}
    >
      {children}
    </Button>
  )
}
export default BlueButton

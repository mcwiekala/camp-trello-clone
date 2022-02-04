import { Button } from '@mantine/core'
import type { ButtonProps } from '@mantine/core'
import useStyles from './style'

const GrayButton = ({
  leftIcon,
  children,
  onClick,
  ...rest
}: ButtonProps<'button'> | ButtonProps<'a'>) => {
  const { classes } = useStyles()
  return (
    <Button
      classNames={{ outline: classes.grayButton }}
      leftIcon={leftIcon}
      color="gray"
      variant="outline"
      radius={8}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Button>
  )
}

export default GrayButton

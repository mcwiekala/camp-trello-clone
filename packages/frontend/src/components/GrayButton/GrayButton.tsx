import { Button } from '@mantine/core'
import type { ButtonProps } from '@mantine/core'
import useStyles from './style'

const GrayButton = ({ className, leftIcon, children, onClick, ...rest }: ButtonProps<'button'>) => {
  const { classes } = useStyles()
  return (
    <Button
      classNames={{ outline: classes.grayButton }}
      className={className}
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

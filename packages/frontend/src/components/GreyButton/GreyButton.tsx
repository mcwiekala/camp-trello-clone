import { Button } from '@mantine/core'
import type { ButtonProps } from '@mantine/core'
import useStyles from './style'

const GreyButton = ({ className, leftIcon, children, onClick, ...rest }: ButtonProps<'button'>) => {
  const { classes } = useStyles()
  return (
    <Button
      classNames={{ outline: classes.greyButton }}
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

export default GreyButton

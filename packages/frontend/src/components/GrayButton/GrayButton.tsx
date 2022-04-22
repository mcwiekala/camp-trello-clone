import { Button } from '@mantine/core'
import type { ButtonProps } from '@mantine/core'
import useStyles from './style'

const GrayButton = ({ children, ...rest }: ButtonProps<'button'> | ButtonProps<'a'>) => {
  const { classes } = useStyles()
  return (
    <Button
      classNames={{ outline: classes.grayButton }}
      color="gray"
      variant="outline"
      radius={8}
      {...rest}
    >
      {children}
    </Button>
  )
}

export default GrayButton

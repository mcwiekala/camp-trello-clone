import { Button } from '@mantine/core'
import useStyles from './style'

type GrayButtonFilledProps = {
  children?: string
  onClick: (e?: React.MouseEvent<HTMLElement>) => void
  rightIcon?: React.ReactNode
  leftIcon?: React.ReactNode
}

const GrayButtonFilled = ({ children, onClick, rightIcon, leftIcon }: GrayButtonFilledProps) => {
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

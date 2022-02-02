import { Button } from '@mantine/core'
import useStyles from './style'

type GrayButtonFilledProps = {
  children?: string
  onClick: (e?: React.MouseEvent<HTMLElement>) => void
  rightIcon?: React.ReactNode
}

const GrayButtonFilled = ({ children, onClick, rightIcon }: GrayButtonFilledProps) => {
  const { classes } = useStyles()
  return (
    <Button
      radius="md"
      onClick={onClick}
      leftIcon={rightIcon}
      classNames={{ root: classes.root, inner: classes.inner }}
    >
      {children}
    </Button>
  )
}
export default GrayButtonFilled

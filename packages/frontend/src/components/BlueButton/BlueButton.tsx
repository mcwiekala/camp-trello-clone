import { Button } from '@mantine/core'
import useStyles from './style'

type BlueButtonProps = {
  children?: string
  onClick: (e?: React.MouseEvent<HTMLElement>) => void
  rightIcon?: React.ReactNode
  leftIcon?: React.ReactNode
}

const BlueButton = ({ children, onClick, rightIcon, leftIcon }: BlueButtonProps) => {
  const { classes } = useStyles()

  return (
    <Button
      radius="md"
      onClick={onClick}
      variant="outline"
      rightIcon={rightIcon}
      leftIcon={leftIcon}
      classNames={{ root: classes.root, inner: classes.inner }}
    >
      {children}
    </Button>
  )
}
export default BlueButton

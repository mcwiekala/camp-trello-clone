import { Button } from '@mantine/core'
import useStyles from './style'

type BlueBtnProps = {
  children?: string
  onClick: (e?: React.MouseEvent<HTMLElement>) => void
  rightIcon?: React.ReactNode
}

const BlueBtn = ({ children, onClick, rightIcon }: BlueBtnProps) => {
  const { classes } = useStyles()
  return (
    <Button
      radius="md"
      onClick={onClick}
      variant="outline"
      rightIcon={rightIcon}
      className={classes.BlueBtn}
    >
      {children}
    </Button>
  )
}
export default BlueBtn

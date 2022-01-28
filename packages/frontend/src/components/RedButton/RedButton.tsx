import { Button } from '@mantine/core'
import useStyles from './style'

type RedButtonProps = {
  children?: string
  onClick: (e?: React.MouseEvent<HTMLElement>) => void
  rightIcon?: React.ReactNode
}

const RedButton = ({ children, onClick, rightIcon }: RedButtonProps) => {
  const { classes } = useStyles()
  return (
    <Button
      radius="md"
      onClick={onClick}
      variant="outline"
      color="red"
      rightIcon={rightIcon}
      className={classes.RedButton}
    >
      {children}
    </Button>
  )
}
export default RedButton

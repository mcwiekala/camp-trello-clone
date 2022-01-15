import { Button } from '@mantine/core'
import useStyles from './style'

type GreyButtonProps = {
  leftIcon?: React.ReactNode
  children: string
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void
  className?: string
}

const GreyButton = ({ className, leftIcon, children, onClick }: GreyButtonProps) => {
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
    >
      {children}
    </Button>
  )
}

export default GreyButton

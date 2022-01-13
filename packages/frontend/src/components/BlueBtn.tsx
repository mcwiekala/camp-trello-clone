import { Button } from '@mantine/core'

type BlueBtnProps = {
  children?: string
  onClick: (e?: React.MouseEvent<HTMLElement>) => void
  rightIcon?: React.ReactNode
}

export const BlueBtn = ({ children, onClick, rightIcon }: BlueBtnProps) => (
  <Button
    radius="md"
    onClick={onClick}
    variant="outline"
    rightIcon={rightIcon}
    styles={(theme) => ({
      root: {
        'backgroundColor': '#DAE4FD',
        'color': '#2F80ED',
        'maxWidth': '100%',

        '&:hover': {
          color: '#FFF',
          backgroundColor: theme.fn.darken('#00acee', 0.1)
        }
      }
    })}
  >
    {children}
  </Button>
)

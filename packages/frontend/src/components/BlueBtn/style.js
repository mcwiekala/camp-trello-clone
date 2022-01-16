import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  BlueBtn: {
    'backgroundColor': '#DAE4FD',
    'color': '#2F80ED',
    'transition': 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    'maxWidth': '100%',

    '&:hover': {
      color: '#FFF',
      backgroundColor: theme.fn.darken('#00acee', 0.1)
    }
  }
}))

export default useStyles

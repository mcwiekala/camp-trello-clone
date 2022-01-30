import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: '#DAE4FD',
    color: '#2F80ED',
    maxWidth: '100%',
    transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    '&:hover': {
      color: '#FFF',
      backgroundColor: theme.fn.darken('#00acee', 0.1)
    }
  },
  inner: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  }
}))

export default useStyles

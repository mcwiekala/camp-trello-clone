import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.colors.gray[0],
    color: theme.colors.gray[6],
    fontSize: '14px',
    lineHeight: '18px',
    maxWidth: '100%',
    transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    '&:hover': {
      color: '#FFF',
      backgroundColor: theme.fn.darken(theme.colors.gray[0], 0.2)
    }
  },
  inner: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start'
  }
}))

export default useStyles

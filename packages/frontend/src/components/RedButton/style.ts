import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  RedButton: {
    color: theme.colors.red[6],
    fontFamily: theme.headings.fontFamily,
    transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    '&:hover': {
      color: '#FFF',
      backgroundColor: theme.fn.darken(theme.colors.red[6], 0.1)
    },
    padding: '0 clamp(2px, 1vw, 18px)'
  },
  title: {
    color: theme.colors.gray[2],
    fontFamily: 'Poppins',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '15px',
    margin: '0 10px'
  }
}))

export default useStyles

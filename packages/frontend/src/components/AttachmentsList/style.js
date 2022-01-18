import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  attachmentHeader: {
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    color: theme.colors.gray[5],
    fontFamily: 'Poppins',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '15px',
    margin: '0 10px'
  },
  garyBtn: {
    'color': '#828282',
    'transition': 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    '&:hover': {
      color: theme.colors.cyan[0],
      backgroundColor: theme.colors.cyan[5]
    }
  },
  attachmentSection: {
    padding: '10px 0px'
  }
}))
export default useStyles

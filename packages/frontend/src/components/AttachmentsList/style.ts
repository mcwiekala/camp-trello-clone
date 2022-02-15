import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  attachmentHeader: {
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    color: theme.colors.gray[2],
    fontFamily: theme.headings.fontFamily,
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '15px',
    margin: '0 6px'
  },
  grayBtn: {
    marginLeft: '10px',
    color: theme.colors.gray[6],
    transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    '&:hover': {
      color: theme.colors.gray[0],
      backgroundColor: theme.colors.gray[3]
    }
  },
  attachmentSection: {
    padding: '10px 0px'
  }
}))
export default useStyles

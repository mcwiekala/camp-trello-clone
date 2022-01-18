import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  divBody: {
    display: 'flex'
  },
  imagePlaceholder: {
    backgroundColor: theme.colors.gray[2],
    fontFamily: 'Poppins',
    fontWeight: '500',
    textTransform: 'uppercase'
  },
  divInfo: {
    marginLeft: '15px',
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '15px'
  },
  date: {
    fontSize: '10px',
    lineHeight: '12px',
    fontFamily: 'Poppins',
    color: theme.colors.gray[4]
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: '12px',
    marginBottom: '5px',
    fontWeight: '500'
  },
  buttonDelete: {
    'transition': 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    '&:hover': {
      backgroundColor: theme.colors.red[8],
      color: theme.colors.red[0]
    }
  },
  buttonDownload: {
    'marginRight': '10px',
    'transition': 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    '&:hover': {
      backgroundColor: theme.colors.green[7],
      color: theme.colors.green[0]
    }
  }
}))

export default useStyles

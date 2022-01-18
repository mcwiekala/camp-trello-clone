import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  divBody: {
    display: 'flex'
  },
  imagePlaceholder: {
    backgroundColor: theme.colors.lightgrey[1]
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
    color: theme.colors.lightgrey[0]
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: '12px',
    marginBottom: '5px',
    fontWeight: '500'
  },
  buttonDelete: {
    '&:hover': {
      backgroundColor: theme.colors.red[8],
      color: theme.colors.red[0]
    }
  },
  buttonDownload: {
    'marginRight': '10px',
    '&:hover': {
      backgroundColor: theme.colors.green[7],
      color: theme.colors.green[0]
    }
  }
}))

export default useStyles

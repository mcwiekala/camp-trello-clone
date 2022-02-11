import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  divUserInfo: {
    display: 'flex',
    paddingTop: '5px',
    marginBottom: '15px',
    '& > *': {
      marginRight: '14px'
    }
  },
  divComment: {
    marginBottom: '20px'
  },
  name: {
    fontFamily: theme.other.secondaryFont,
    fontSize: '12px',
    fontWeight: '500'
  },
  date: {
    fontSize: '10px',
    color: theme.colors.gray[2]
  },
  divButtons: {
    marginLeft: 'auto',
    color: theme.colors.gray[9],
    marginBottom: 'auto'
  },
  buttonSubtle: {
    color: theme.colors.gray[9],
    fontFamily: theme.other.secondaryFont,
    fontSize: '10px',
    fontWeight: '400',
    '&: hover': {
      backgroundColor: theme.colors.gray[0]
    }
  }
}))

export default useStyles

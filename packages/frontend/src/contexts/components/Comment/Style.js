import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  DivTop: {
    'display': 'flex',
    'paddingTop': '5px',
    '& > *': {
      marginRight: '14px'
    }
  },
  Name: {
    fontFamily: 'Poppins',
    fontSize: '12px'
  },
  Date: {
    fontFamily: 'Noto Sans',
    fontSize: '10px',
    color: theme.colors.gray[5]
  },
  DivButtons: {
    marginLeft: 'auto',
    color: theme.colors.gray[6],
    marginBottom: 'auto'
  },
  ButtonOutline: {
    'border': 'none',
    'color': theme.colors.gray[6],
    'fontFamily': 'Poppins',
    'fontSize': '10px',
    'fontWeight': '400',
    '&: hover': {
      backgroundColor: theme.colors.gray[0]
    }
  }
}))

export default useStyles

import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  DivTop: {
    'display': 'flex',
    'paddingTop': '5px',
    'marginBottom': '15px',
    '& > *': {
      marginRight: '14px'
    }
  },
  DivBottom: {
    marginBottom: '20px'
  },
  Name: {
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontWeight: '500'
  },
  Date: {
    fontFamily: 'Noto Sans',
    fontSize: '10px',
    color: theme.colors.customGray[2]
  },
  DivButtons: {
    marginLeft: 'auto',
    color: theme.colors.customGray[9],
    marginBottom: 'auto'
  },
  ButtonOutline: {
    'border': 'none',
    'color': theme.colors.customGray[9],
    'fontFamily': 'Poppins',
    'fontSize': '10px',
    'fontWeight': '400',
    '&: hover': {
      backgroundColor: theme.colors.gray[0]
    }
  }
}))

export default useStyles

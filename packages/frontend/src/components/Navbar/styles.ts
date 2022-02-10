import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  navbar: {
    display: 'flex',
    flexWrap: 'nowrap',
    height: '68px',
    boxShadow: '0px 2px 2px 0px #0000000D',
    padding: '12px'
  },
  navbar__logo: {
    display: 'flex',
    alignItems: 'center',
    '& img': {
      margin: '0 10px'
    },
    '& h1': {
      margin: 0,
      fontSize: '18px',
      fontFamily: theme.headings.fontFamily,
      color: '#333333'
    }
  },
  navbar__dashboard: {
    margin: '0 30px 0 90px',
    display: 'flex',
    alignItems: 'center',

    '& h2': {
      margin: 0,
      fontSize: '18px',
      fontFamily: theme.headings.fontFamily,
      weight: 500,
      color: '#333333'
    },
    '& > div': {
      margin: '0 24px',
      width: '0px',
      height: '35px',
      border: '1px solid #E0E0E0'
    }
  },
  navbar__options: {
    display: 'flex',
    marginLeft: 'auto',
    alignItems: 'center'
  },
  navbar__options__select__wrapper: {
    margin: '0 15px 0 60px'
  },
  navbar__options__select__input: {
    border: 0
  },
  navbar__options__select__icon: {
    margin: '0 30px 0 -10px'
  },
  navbar__options__select__rightSection: {
    margin: '0 30px 0 0'
  }
}))

export default useStyles

import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  container: {
    padding: '80px 60px'
  },
  boardsHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '10px 0'
  },
  title: {
    fontFamily: theme.headings.fontFamily,
    fontSize: 18
  },
  dashboards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'repeat(2, 300px)',
    gridGap: 20
  },
  columns: {
    display: 'flex',
    padding: 10,
    margin: 10
  },
  buttonGrayRoot: {
    backgroundColor: theme.colors.gray[0],
    color: theme.colors.gray[6],
    fontSize: '14px',
    lineHeight: '18px',
    transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    '&:hover': {
      color: '#FFF',
      backgroundColor: theme.fn.darken(theme.colors.gray[0], 0.2)
    }
  }
}))

export default useStyles

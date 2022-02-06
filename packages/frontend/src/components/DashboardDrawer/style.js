import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  drawer: {
    padding: '20px 5px 20px 20px'
  },
  drawerHeader: {
    marginBottom: 4
  },
  authorHeader: {
    display: 'flex'
  },
  authorSection: {
    margin: '6px 0',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10
  },
  authorInfo: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: theme.headings.fontFamily,
    fontWeight: 600,
    color: theme.colors.gray[9],
    fontSize: '14px',
    margin: 0
  },
  title: {
    color: theme.colors.gray[2],
    fontFamily: theme.headings.fontFamily,
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '15px',
    margin: '0 6px'
  },
  date: {
    color: theme.colors.gray[2],
    fontFamily: theme.headings.fontFamily,
    fontWeight: 600,
    fontSize: '12px',
    margin: 0
  },
  divider: {
    marginBottom: 10
  },
  scrollArea: {
    paddingRight: 15
  }
}))

export default useStyles

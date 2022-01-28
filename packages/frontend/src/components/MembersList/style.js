import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  membersListHeader: {
    display: 'flex'
  },
  title: {
    color: theme.colors.gray[2],
    fontFamily: theme.headings.fontFamily,
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '15px',
    margin: '0 10px'
  },
  memberSection: {
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: '38px 5fr 2fr',
    padding: '5px'
  },
  username: {
    fontFamily: theme.headings.fontFamily,
    fontWeight: 600,
    color: theme.colors.gray[9],
    width: '100%',
    margin: '0 10px'
  },
  admin: {
    textAlign: 'center',
    color: theme.colors.gray[6],
    fontWeight: 600
  }
}))
export default useStyles

import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  dashboardMain: {
    border: '1px solid',
    borderColor: theme.colors.gray[2],
    borderRadius: theme.radius.md,
    padding: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: 5
    }
  },
  title: { fontFamily: theme.other.secondaryFont },
  userList: {
    alignSelf: 'flex-start'
  }
}))

export default useStyles

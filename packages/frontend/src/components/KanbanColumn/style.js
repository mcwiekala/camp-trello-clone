import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  task: {
    margin: 0
  },
  title: {
    fontFamily: theme.other.secondaryFont
  },
  column: {
    width: 300,
    padding: 12,
    '& > *': {
      marginTop: 24
    }
  }
}))

export default useStyles

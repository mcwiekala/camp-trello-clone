import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  task: {
    margin: '12px 0 0'
  },
  title: {
    fontFamily: theme.other.secondaryFont
  },
  column: {
    width: 300,
    padding: 12,
    '& > button': {
      marginTop: '12px'
    }
  }
}))

export default useStyles

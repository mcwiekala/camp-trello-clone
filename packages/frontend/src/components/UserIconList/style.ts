import { createStyles } from '@mantine/core'

const useStyles = createStyles(() => ({
  userIconList: {
    display: 'flex',
    alignItems: 'center',
    '& > *': {
      margin: 5
    }
  }
}))

export default useStyles

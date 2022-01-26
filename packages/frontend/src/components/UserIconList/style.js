import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  userIconList: {
    display: 'flex',
    alignItems: 'center',
    '& > *': {
      margin: 5
    }
  }
}))

export default useStyles

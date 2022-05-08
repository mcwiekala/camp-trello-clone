import { createStyles } from '@mantine/core'

const useStyles = createStyles(() => ({
  input: {
    borderWidth: 0
  },
  wrapper: {
    height: '34px',
    boxShadow: '0px 4px 12px 0px #0000001A'
  },
  buttonRightSection: {
    width: 83,
    margin: '2px 2px 2px 0',

    '& button': {
      height: '34px'
    }
  }
}))

export default useStyles

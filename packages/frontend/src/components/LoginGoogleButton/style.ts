import { createStyles } from '@mantine/core'

const useStyles = createStyles(() => ({
  btn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center',
    boxSizing: 'content-box',
    padding: '1px 0px',
    border: 0,
    height: '3em',
    boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.084), 0px 1px 1px rgba(0, 0, 0, 0.168)'
  }
}))

export default useStyles

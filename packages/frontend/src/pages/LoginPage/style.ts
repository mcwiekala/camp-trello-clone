import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  container: {
    margin: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.blue[6]
  },
  box: {
    width: '60%',
    height: '50%',
    backgroundColor: theme.colors.blue[0],
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    filter: 'drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.1))'
  },
  btn: {
    height: 50,
    padding: 0,
    paddingRight: '6px',
    paddingLeft: '2px',
    border: 0
  }
}))

export default useStyles

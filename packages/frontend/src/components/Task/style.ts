import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  taskMain: {
    borderRadius: theme.radius.md,
    boxShadow: '0px 4px 12px #0000003F',
    padding: '7px 12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  title: { fontWeight: 400, width: '100%', margin: '12px 0' },
  attachment: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    fontSize: 10
  },
  iconsAlignRight: {
    display: 'flex',
    marginLeft: 'auto',
    color: theme.colors.gray[3],
    marginRight: 9,
    minWidth: '55px',
    justifyContent: 'space-between'
  },
  input: {
    color: theme.colors.gray[3],
    borderRadius: theme.radius.md,
    width: '100%'
  },
  buttonSave: {
    marginLeft: 'auto'
  }
}))

export default useStyles

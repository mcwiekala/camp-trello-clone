import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  taskMain: {
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
  attachment: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    fontSize: 10
  },
  iconsAlignRight: {
    marginLeft: 'auto',
    color: theme.colors.gray[3],
    marginRight: 9
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

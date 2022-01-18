import { createStyles } from '@mantine/core'

const padding = '7px'

const useStyles = createStyles((theme) => ({
  title: {
    display: 'flex',
    paddingTop: padding,
    paddingBottom: padding,
    '& > *': {
      alignSelf: 'center',
      marginRight: '10px'
    }
  },
  textEditorArea: {
    paddingTop: padding,
    paddingBottom: padding
  },
  buttonsArea: {
    paddingTop: padding,
    paddingBottom: padding,
    '& > *': {
      marginRight: '10px'
    }
  },
  rootTextEditor: {
    borderRadius: '8px',
    borderColor: theme.colors.gray[9]
  },
  toolbarInner: {
    borderRadius: 'inherit',
    margin: '0px'
  },
  rootText: {
    color: theme.colors.gray[2],
    fontWeight: '600'
  }
}))

export default useStyles

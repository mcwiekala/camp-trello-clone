import { createStyles } from '@mantine/core'

const padding = '7px'

const useStyles = createStyles((theme) => ({
  descriptionHeader: {
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    color: theme.colors.gray[2],
    fontFamily: theme.headings.fontFamily,
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '15px',
    margin: '0 6px'
  },
  button: {
    marginLeft: '10px',
    color: theme.colors.gray[6],
    transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    '&:hover': {
      color: theme.colors.gray[0],
      backgroundColor: theme.colors.gray[3]
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
  }
}))

export default useStyles

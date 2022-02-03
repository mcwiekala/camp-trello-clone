import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  modal: {
    padding: 20
  },
  container: {
    display: 'grid',
    gridTemplateColumns: '7fr 3fr',
    gridGap: '2em'
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 32,
    height: 32,
    padding: 0,
    color: 'white',
    backgroundColor: '#1a64db',
    '&:hover': {
      backgroundColor: theme.colors.red[6]
    }
  },
  column: {
    width: '100%'
  },
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1em',
    width: '100%'
  },
  sidebarHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '5px'
  },
  sectionTitle: {
    color: theme.colors.gray[2],
    fontFamily: theme.headings.fontFamily,
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '15px',
    margin: '0 6px'
  },
  actionSection: {
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    fontSize: '18px'
  },
  coverImage: {
    height: 130,
    width: '100%',
    objectFit: 'cover',
    borderRadius: 20,
    marginBottom: 10
  },
  popTarget: {
    width: '100%'
  },
  cont: {
    height: '100vh'
  }
}))

export default useStyles

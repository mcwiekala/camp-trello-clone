import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  modal: {
    padding: 0
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
  cancelButton: {
    transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    '&:hover': {
      color: '#FFF',
      backgroundColor: theme.colors.red[6]
    }
  },
  modalTitle: {
    margin: 0
  },
  column: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 10
  },
  row: {
    display: 'flex',
    width: '100%',
    gap: 10
  },
  footer: {
    display: 'flex',
    width: '100%',
    gap: 10
  },
  titleInput: {
    border: `1px solid ${theme.colors.gray[1]}`
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
  tooltip: {
    color: '#FFF',
    backgroundColor: theme.colors.red[6]
  },
  spanner: {
    width: '100%'
  }
}))

export default useStyles

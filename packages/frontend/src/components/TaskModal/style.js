import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  modal: {
    padding: 20
  },
  container: {
    display: 'grid',
    gridTemplateColumns: '8fr 2fr'
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 32,
    height: 32,
    padding: 0
  },
  column: {
    width: '100%'
  },
  sidebar: {
    width: '100%'
  },
  title: {
    fontSize: '16px'
  },
  coverImage: {
    height: 130,
    width: '100%',
    objectFit: 'cover',
    borderRadius: 20,
    marginBottom: 10
  },
  cont: {
    height: '100vh'
  }
}))

export default useStyles

import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  outline: {
    border: 'solid 1px',
    borderColor: theme.colors.gray[1],
    borderRadius: 12,
    padding: 3
  },
  searchBar: {
    border: 'solid black 1px'
  },
  photoSearchText: {
    fontWeight: 600,
    fontFamily: theme.other.secondaryFont,
    color: theme.colors.gray[8]
  },
  photoUnsplashText: {
    color: theme.colors.gray[6],
    marginBottom: 10
  },
  imageResults: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& > *': {
      margin: 5
    }
  }
}))

export default useStyles

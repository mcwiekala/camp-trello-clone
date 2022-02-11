import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  commentMain: {
    border: '1px solid',
    borderColor: theme.colors.gray[2],
    borderRadius: theme.radius.md,
    padding: 4,
    display: 'flex',
    flexDirection: 'column'
  },
  button: { alignSelf: 'end' }
}))

export default useStyles

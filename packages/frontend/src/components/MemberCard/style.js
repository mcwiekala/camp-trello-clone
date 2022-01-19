import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  memberCard: {
    borderRadius: '12px',
    padding: '10px',
    width: '300px',
    border: `1px solid ${theme.colors.gray[1]}`,
    boxShadow: '0px 2px 4px #0000000F'
  },
  memberCardTitle: {
    fontWeight: 600,
    color: theme.colors.gray[9]
  },
  memberCardDescription: {
    marginBottom: '10px',
    color: theme.colors.gray[2]
  },
  memberCardInput: {
    filter: 'drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.1))'
  },
  usersContainer: {
    borderRadius: '12px',
    border: `1px solid ${theme.colors.gray[1]}`,
    margin: '10px 0',
    filter: 'drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.1))',
    overflow: 'hidden'
  },
  memberContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px',
    width: '100%',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      backgroundColor: theme.colors.gray[1]
    }
  },
  user: {
    marginLeft: '6px',
    color: theme.colors.gray[9]
  },
  selectedUser: {
    backgroundColor: theme.colors.blue[4],
    '&:hover': {
      backgroundColor: theme.colors.blue[5]
    }
  },
  icon: {
    marginRight: '4px'
  }
}))
export default useStyles

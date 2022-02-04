import { Drawer, Divider, Text } from '@mantine/core'
import { FaUser } from 'react-icons/all'

// Components
import Description from '../Description/Description'
import MembersList from '../MembersList/MembersList'

// Logic
import { RandomUserType } from '../../logic/randomUser'
import convertDate from '../../utils/convertDate'

import useStyles from './style'
import UserIcon from '../UserIcon/UserIcon'

type DashboardDrawerProps = {
  title: string
  description: string
  creationDate: Date
  membersList: RandomUserType[]
  isAdmin: boolean
  isOpen: boolean
  setIsOpen: () => void
  onDescriptionSaveHandler: (descriptionText: string) => void
  onUserRemoveHandler: (id: string) => void
}

const DashboardDrawer = ({
  title,
  description,
  creationDate,
  membersList,
  isAdmin,
  isOpen,
  setIsOpen,
  onDescriptionSaveHandler,
  onUserRemoveHandler
}: DashboardDrawerProps) => {
  const { classes } = useStyles()

  const dashboardAuthor = membersList.filter((member) => member.role === 'Admin')[0]

  const parsedDate = convertDate(creationDate)

  return (
    <Drawer
      opened={isOpen}
      onClose={setIsOpen}
      position="right"
      size="xl"
      padding="xl"
      title={title}
      classNames={{ header: classes.drawerHeader }}
    >
      <Divider className={classes.divider} />

      <header className={classes.authorHeader}>
        <FaUser className={classes.title} />
        <Text className={classes.title}>Made by</Text>
      </header>

      <section className={classes.authorSection}>
        <UserIcon username={dashboardAuthor.username} imgUrl={dashboardAuthor.profilePictureURL} />
        <div className={classes.authorInfo}>
          {dashboardAuthor.username}
          <p className={classes.date}>{`on ${parsedDate}`}</p>
        </div>
      </section>

      <Description
        initialText={description}
        onTextSavedHandler={
          (descriptionText: string) => onDescriptionSaveHandler(descriptionText)
          // eslint-disable-next-line react/jsx-curly-newline
        }
      />

      <MembersList
        title="Teams"
        membersList={membersList}
        onDeleteHandler={onUserRemoveHandler}
        isDeletable={isAdmin}
      />
    </Drawer>
  )
}

export default DashboardDrawer

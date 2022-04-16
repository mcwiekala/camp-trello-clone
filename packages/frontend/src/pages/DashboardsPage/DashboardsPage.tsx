/* eslint-disable no-console */
import { useState, useContext } from 'react'
import { Text, Button } from '@mantine/core'
import { useNavigate } from 'react-router-dom'

// Components
import { AiOutlinePlus } from 'react-icons/ai'
import DashboardModal from '../../components/DashboardModal/DashboardModal'
import { Dashboard } from '../../components/Dashboard/Dashboard'

// Contexts & routes
import { DashboardsContext } from '../../contexts/DashboardsContext'

// Logic
import RandomUser from '../../logic/randomUser'
import GenerateTask from '../../logic/generateTask'

// Misc
import UserType from '../../types/user'
import useStyles from './style'

type DashboardProps = {
  id: string
  imageCoverUrl: string
  title: string
  status: string
}

const DashboardsPage = () => {
  const { classes } = useStyles()

  const navigate = useNavigate()

  const [isOpen, setIsOpen] = useState(false)
  const [dashboards, setDashboards] = useContext(DashboardsContext)

  const openDashboardModal = () => {
    setIsOpen((prevStateIsOpen) => !prevStateIsOpen)
  }

  const addNewDashboard = ({ id, imageCoverUrl, title, status }: DashboardProps) => {
    const currentUser = new RandomUser().userData
    currentUser.role = 'Admin'
    const createdAt = new Date()
    const users: UserType[] = []
    users.push(currentUser)
    const newDashboard = {
      id,
      description: '',
      imageCoverUrl,
      title,
      createdAt,
      users,
      status,
      admin: 'userId',
      columns: [
        {
          id: '2',
          title: 'New column',
          tasks: [new GenerateTask(users)]
        },
        {
          id: '3',
          tasks: []
        }
      ]
    }
    setDashboards([...dashboards, newDashboard])
  }

  return (
    <article className={classes.container}>
      <header className={classes.boardsHeader}>
        <Text className={classes.title}>All Boards</Text>
        <Button onClick={openDashboardModal} leftIcon={<AiOutlinePlus />}>
          Add
        </Button>
      </header>
      <section className={classes.dashboards}>
        {dashboards.map(({ id, title, users, imageCoverUrl }) => (
          <Dashboard
            key={id}
            title={title}
            users={users}
            imageCoverUrl={imageCoverUrl}
            onClickHandler={() => navigate(`${id}`)}
          />
        ))}
      </section>
      <DashboardModal
        isOpen={isOpen}
        setIsOpen={openDashboardModal}
        onCloseHandler={addNewDashboard}
      />
    </article>
  )
}

export default DashboardsPage

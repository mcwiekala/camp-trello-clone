import { useState, useContext } from 'react'
import { Text, Button } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'
import { CreateDashboardCommand, DashboardDTO, UserDTO } from 'shared'
import faker from '@faker-js/faker'
import DashboardModal from '../../components/DashboardModal/DashboardModal'
import { Dashboard } from '../../components/Dashboard/Dashboard'
import { DashboardsContext } from '../../contexts/DashboardsContext'
import useStyles from './style'
import httpService from '../../infrastructure/HttpService/HttpService'

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

  const addNewDashboard = ({ imageCoverUrl, title, status }: DashboardDTO) => {
    console.log('Create new Dashboard!')
    const users: UserDTO[] = []
    const currentUser: UserDTO = {
      username: 'Michal',
      id: '',
      googleId: '',
      avatarUrl: '',
      email: ''
    }
    users.push(currentUser)
    const newDashboard: DashboardDTO = {
      // TODO: id from backend?
      id: faker.datatype.uuid(),
      title,
      users,
      imageCoverUrl,
      createdAt: new Date(),
      status
    }
    const command: CreateDashboardCommand = {
      title,
      imageCoverUrl,
      status
    }
    httpService.createDashboard(command)
    setDashboards([...dashboards, newDashboard])
  }

  return (
    <article className={classes.container}>
      <header className={classes.boardsHeader}>
        <Text className={classes.title}>All Boards</Text>
        <Button onClick={openDashboardModal} leftIcon={<AiOutlinePlus />}>
          Add Dashboard
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

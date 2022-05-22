import { useState, useContext } from 'react'
import { Text, Button } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'
import { CreateDashboardCommand, DashboardDTO, UserDTO } from 'shared'
import faker from '@faker-js/faker'
import DashboardModal from '../../components/DashboardModal/DashboardModal'
import { DashboardGalleryPreview } from '../../components/DashboardGalleryPreview/DashboardGalleryPreview'
import { DashboardsContext } from '../../contexts/DashboardsContext'
import useStyles from './style'
import httpService from '../../infrastructure/HttpService/HttpService'

type DashboardProps = {
  id: string
  imageCoverUrl: string
  title: string
  status: string
}

const DashboardGalleryPage = () => {
  const { classes } = useStyles()

  const navigate = useNavigate()

  const [isOpen, setIsOpen] = useState(false)
  const [dashboards, setDashboards] = useContext(DashboardsContext)

  const openDashboardModal = () => {
    setIsOpen((prevStateIsOpen) => !prevStateIsOpen)
  }

  const addNewDashboard = async ({ imageCoverUrl, title, status }: DashboardDTO) => {
    console.log('Create new Dashboard!')
    const users: UserDTO[] = []
    const currentUser: UserDTO = {
      username: 'Michal',
      id: '111',
      googleId: '111',
      avatarUrl: 'wwww',
      email: 'a@o2.pl'
    }
    users.push(currentUser)
    const command: CreateDashboardCommand = {
      // TODO: id from backend?
      // id: faker.datatype.uuid(),
      title,
      users,
      imageCoverUrl,
      createdAt: new Date(),
      status
    }
    const resultPromise: Promise<DashboardDTO> = httpService.createDashboard(command)
    const newDashboard: DashboardDTO = await Promise.resolve(resultPromise)
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
          <DashboardGalleryPreview
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

export default DashboardGalleryPage

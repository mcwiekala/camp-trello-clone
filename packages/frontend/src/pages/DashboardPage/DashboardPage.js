import { useState, useContext } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { useParams } from 'react-router-dom'
import { Button } from '@mantine/core'
import { FaEllipsisH } from 'react-icons/all'
import { nanoid } from 'nanoid'

import KanbanColumn from '../../components/KanbanColumn/KanbanColumn'
import useStyles from './style'
import UserIconList from '../../components/UserIconList/UserIconList'
import TaskModal from '../../components/TaskModal/TaskModal'
import { DashboardsContext } from '../../contexts/DashboardsContext'
import GenerateComment from '../../logic/generateComment'
import DashboardDrawer from '../../components/DashboardDrawer/DashboardDrawer'

const DashboardPage = () => {
  const { id: dashboardId } = useParams()
  const [dashboards, setDashboards] = useContext(DashboardsContext)
  const currentDashboard = dashboards.find(({ id }) => id === dashboardId)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDashboardDrawerOpen, setIsDashboardDrawerOpen] = useState(false)
  const { classes } = useStyles()
  const [currentIssue, setCurrentIssue] = useState()

  const onDragEnd = (result) => {
    const newColumns = currentDashboard.columns
    const findColumnSource = newColumns.find(({ id }) => id === result.source.droppableId)
    const findIssueSource = findColumnSource.tasks.find(({ id }) => id === result.draggableId)
    const issueSourceIndex = findColumnSource.tasks.findIndex(
      (issue) => issue.id === result.draggableId
    )
    const findColumnDestination = newColumns.find(({ id }) => id === result.destination.droppableId)

    findColumnSource.tasks.splice(issueSourceIndex, 1)
    findColumnDestination.tasks.splice(result.destination.index, 0, findIssueSource)

    setDashboards([
      ...dashboards.filter(({ id }) => id !== dashboardId),
      {
        ...currentDashboard,
        columns: newColumns
      }
    ])
  }

  const onTaskModalCloseHandler = (updatedTask) => {
    const columnToUpdate = currentDashboard.columns.filter(({ tasks }) =>
      tasks.some(({ id }) => id === updatedTask.id)
    )[0]
    const updatedColumn = {
      ...columnToUpdate,
      tasks: columnToUpdate.tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    }

    setIsModalOpen(false)
    setDashboards([
      ...dashboards.filter(({ id }) => id !== dashboardId),
      {
        ...currentDashboard,
        columns: currentDashboard.columns.map((column) => {
          if (column.id === updatedColumn.id) {
            return updatedColumn
          }

          return column
        })
      }
    ])
  }

  const onTaskEventHandler = (taskId, columnId) => {
    const findColumn = currentDashboard.columns
      .find(({ id }) => id === columnId)
      .tasks.find(({ id }) => id === taskId)
    setCurrentIssue(findColumn)
    setIsModalOpen(true)
  }
  const onDescriptionSaveHandler = (descriptionText) => {
    const updatedDashboard = { ...currentDashboard, description: descriptionText }

    setDashboards([
      ...dashboards.filter(({ id }) => id !== dashboardId),
      {
        ...updatedDashboard
      }
    ])
  }
  const onUserRemoveHandler = (userId) => {
    const updatedDashboard = {
      ...currentDashboard,
      users: currentDashboard.users.filter((user) => user.id !== userId)
    }

    setDashboards([...dashboards.filter(({ id }) => id !== dashboardId), updatedDashboard])
  }

  // TODO addIng new columns with title
  const onAddColumnHandler = () => {
    const columns = [...currentDashboard.columns, { id: nanoid(), tasks: [] }]

    setDashboards([
      ...dashboards.filter(({ id }) => id !== dashboardId),
      { ...currentDashboard, columns }
    ])
  }

  const onTaskInitializeHandler = (columnId) => {
    const newTask = {
      id: nanoid(),
      description: '',
      assigneeList: [],
      comments: [],
      attachment: []
    }
    const newColumns = currentDashboard.columns.map((column) => {
      if (column.id === columnId) {
        return {
          ...column,
          tasks: [...column.tasks, newTask]
        }
      }
      return column
    })

    setDashboards([
      ...dashboards.filter(({ id }) => id !== dashboardId),
      {
        ...currentDashboard,
        columns: newColumns
      }
    ])
  }

  const onTaskAddHandler = (taskId, title) => {
    const updatedTask = {
      ...currentDashboard.columns
        .find(({ tasks }) => tasks.some(({ id }) => id === taskId))
        .tasks.find(({ id }) => id === taskId),
      title
    }

    setDashboards([
      ...dashboards.filter(({ id }) => id !== dashboardId),
      {
        ...currentDashboard,
        columns: currentDashboard.columns.map((column) => {
          if (column.tasks.some(({ id }) => id === taskId)) {
            return {
              ...column,
              tasks: column.tasks.map((task) => (task.id === taskId ? updatedTask : task))
            }
          }
          return column
        })
      }
    ])
  }

  return (
    <div style={{ overflowX: 'scroll' }}>
      <div style={{ display: 'flex' }}>
        <Button classNames={{ root: classes.buttonGrayRoot }}>{currentDashboard.status}</Button>

        <UserIconList listOfUsers={currentDashboard.users} isAppendable={false} iconLimit={4} />
        <Button
          style={{ marginLeft: 'auto' }}
          classNames={{ root: classes.buttonGrayRoot }}
          leftIcon={<FaEllipsisH />}
          onClick={() => setIsDashboardDrawerOpen(true)}
        >
          Show Menu
        </Button>
      </div>
      <div className={classes.columns}>
        <DragDropContext onDragEnd={onDragEnd}>
          {currentDashboard.columns.map(({ id, title, tasks }, index) => (
            <Droppable key={id} droppableId={id} index={index}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <KanbanColumn
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    columnId={id}
                    title={title}
                    tasks={tasks}
                    onAddHandler={onAddColumnHandler}
                    onTaskClickHandler={onTaskEventHandler}
                    onCreateTaskHandler={onTaskAddHandler}
                    onTaskInitializeHandler={onTaskInitializeHandler}
                  />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </DragDropContext>
      </div>
      {isModalOpen ? (
        <TaskModal
          isOpen={isModalOpen}
          commentsList={[new GenerateComment().getComment]}
          membersList={currentDashboard.users}
          onCloseHandler={onTaskModalCloseHandler}
          task={currentIssue}
        />
      ) : null}
      <DashboardDrawer
        title={currentDashboard.title}
        description={currentDashboard.description}
        creationDate={currentDashboard.createdAt}
        membersList={currentDashboard.users}
        isAdmin={false}
        isOpen={isDashboardDrawerOpen}
        setIsOpen={() => setIsDashboardDrawerOpen((prevState) => !prevState)}
        onDescriptionSaveHandler={onDescriptionSaveHandler}
        onUserRemoveHandler={onUserRemoveHandler}
      />
    </div>
  )
}
export default DashboardPage

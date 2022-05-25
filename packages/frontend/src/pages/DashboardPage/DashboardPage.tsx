import { useState, useContext } from 'react'
import { DragDropContext, Droppable, DroppableId, DropResult } from 'react-beautiful-dnd'
import { useParams } from 'react-router-dom'
import { Button } from '@mantine/core'
import { FaEllipsisH } from 'react-icons/fa'
import { nanoid } from 'nanoid'
import { DashboardDTO, ColumnDTO, TaskDTO } from 'shared'
import KanbanColumn from '../../components/KanbanColumn/KanbanColumn'
import useStyles from './style'
import UserIconList from '../../components/UserIconList/UserIconList'
import TaskModal from '../../components/TaskModal/TaskModal'
import { DashboardsContext, IDashboardsContext } from '../../contexts/DashboardsContext'
import GenerateComment from '../../logic/generateComment'
import DashboardDrawer from '../../components/DashboardDrawer/DashboardDrawer'

const DashboardPage = () => {
  const { id: dashboardId } = useParams()
  const [dashboards, setDashboards] = useContext<IDashboardsContext>(DashboardsContext)
  const currentDashboard: DashboardDTO = dashboards.find(({ id }) => id === dashboardId)!
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDashboardDrawerOpen, setIsDashboardDrawerOpen] = useState(false)
  const { classes } = useStyles()
  const [currentIssue, setCurrentIssue] = useState<TaskDTO>()

  // const value = useContext(Context)

  const onDragEnd = (result: DropResult) => {
    const { columns } = currentDashboard
    const findColumnSource: ColumnDTO = columns.find(
      (c: ColumnDTO) => c.id === result.source.droppableId
    )!

    const findTaskSource: TaskDTO = findColumnSource!.tasks.find(
      (t: TaskDTO) => t.id === result.draggableId
    )!

    const taskSourceIndex: number = findColumnSource.tasks.findIndex(
      (task: TaskDTO) => task.id === result.draggableId
    )

    const findColumnDestination: ColumnDTO = columns.find(
      (c: ColumnDTO) => c.id === result.destination!.droppableId
    )!

    findColumnSource.tasks.splice(taskSourceIndex, 1)
    findColumnDestination.tasks.splice(result.destination!.index, 0, findTaskSource)

    setDashboards([
      ...dashboards.filter(({ id }) => id !== dashboardId),
      {
        ...currentDashboard,
        columns
      }
    ])
  }

  const onTaskModalCloseHandler = (updatedTask: TaskDTO) => {
    const columnToUpdate: ColumnDTO = currentDashboard.columns.filter(({ tasks }) =>
      tasks.some(({ id }) => id === updatedTask.id)
    )[0]
    const updatedColumn: ColumnDTO = {
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

  const onTaskEventHandler = (taskId: string, columnId: string) => {
    const findColumn: ColumnDTO = currentDashboard.columns.find(({ id }) => id === columnId)!
    const findTask: TaskDTO = findColumn.tasks.find(({ id }) => id === taskId)!
    setCurrentIssue(findTask)
    setIsModalOpen(true)
  }
  const onDescriptionSaveHandler = (descriptionText: string) => {
    const updatedDashboard: DashboardDTO = { ...currentDashboard, description: descriptionText }

    setDashboards([
      ...dashboards.filter(({ id }) => id !== dashboardId),
      {
        ...updatedDashboard
      }
    ])
  }
  const onUserRemoveHandler = (userId: string) => {
    const updatedDashboard: DashboardDTO = {
      ...currentDashboard,
      users: currentDashboard.users.filter((user) => user.id !== userId)
    }

    setDashboards([...dashboards.filter(({ id }) => id !== dashboardId), updatedDashboard])
  }

  // TODO addIng new columns with title
  const onAddColumnHandler = () => {
    const columns: ColumnDTO[] = [
      ...currentDashboard.columns,
      { id: '123', title: 'new Column', order: 0, tasks: [] }
    ]
    const d: DashboardDTO[] = { ...dashboards }
    // const d:DashboardDTO = ...dashboards.filter(({ id }) => id !== dashboardId)
    const updatedDashboard: DashboardDTO = { ...currentDashboard, columns }
    setDashboards([
      ...dashboards.filter((d: DashboardDTO) => d.id !== dashboardId),
      updatedDashboard
    ])
  }

  const onTaskInitializeHandler = (columnId: string) => {
    const newTask = {
      id: nanoid(),
      description: '',
      assigneeList: [],
      comments: [],
      attachment: []
    }
    const newColumns: ColumnDTO[] = currentDashboard.columns.map((column) => {
      if (column.id === columnId) {
        return { id: '123', title: 'new Column', order: 0, tasks: [] }
        // {
        //   ...column,
        //   tasks: [...column.tasks, newTask]
        // }
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

  const onTaskAddHandler = (taskId: string, title: string) => {
    const foundedColumn: ColumnDTO | undefined = currentDashboard.columns.find(({ tasks }) =>
      tasks.some(({ id }) => id === taskId)
    )
    if (!foundedColumn) {
      return
    }
    const foundedTask: TaskDTO | undefined = foundedColumn.tasks.find(({ id }) => id === taskId)
    if (!foundedTask) {
      return
    }

    const updatedTask: TaskDTO = {
      ...foundedTask,
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
    <div className={classes.root}>
      <div className={classes.usersHeader}>
        <Button classNames={{ root: classes.buttonGrayRoot }}>{currentDashboard.status}</Button>

        <UserIconList
          listOfUsers={currentDashboard.users}
          isAppendable={false}
          iconLimit={4}
          displayNumberOfUsers
        />
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
          {currentDashboard.columns.map(({ id, title, tasks }, index: number) => (
            // <Droppable key={id} droppableId={id} index={index}>
            <Droppable key={id} droppableId={id}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <KanbanColumn
                    // ref={provided.innerRef}
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
          task={currentIssue!}
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

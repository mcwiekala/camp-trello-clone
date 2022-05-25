import { BsPlusLg } from 'react-icons/bs'
import { Text } from '@mantine/core'
import { TaskDTO } from 'shared'
import { Draggable, DraggableProvided } from 'react-beautiful-dnd'
import useStyles from './style'
import Task from '../Task/Task'
import BlueButton from '../BlueButton/BlueButton'
import TaskType from '../../types/task'

type KanbanColumnProps = {
  columnId: string
  title: string
  onTaskClickHandler: (taskId: string, columnId: string) => void
  onCreateTaskHandler: (taskId: string, columnId: string) => void
  tasks: TaskDTO[]
  onAddHandler: () => void
  onTaskInitializeHandler: (columnId: string) => void
}

const KanbanColumn = ({
  columnId,
  title,
  tasks,
  onAddHandler,
  onTaskInitializeHandler,
  onTaskClickHandler,
  onCreateTaskHandler
}: KanbanColumnProps) => {
  const { classes } = useStyles()
  const isInitialColumn = title === undefined && tasks.length === 0

  return isInitialColumn ? (
    <div className={classes.column}>
      <BlueButton onClick={onAddHandler} rightIcon={<BsPlusLg />}>
        Add another list
      </BlueButton>
    </div>
  ) : (
    <div className={classes.column}>
      <Text className={classes.title}>{title}</Text>
      {tasks.map((task, index) => (
        <Draggable draggableId={task.id} key={task.id} index={index}>
          {(provided: DraggableProvided) => (
            <div
              className={classes.task}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
              <Task
                {...provided.dragHandleProps}
                id={task.id}
                columnId={columnId}
                title={task.title}
                imageCover={task.imageCoverId}
                assignedUsers={[
                  {
                    _id: '111',
                    username: 'Janek',
                    googleId: '123',
                    avatarUrl: '123',
                    email: 'a@a.pl'
                  }
                ]}
                numberOfAttachments={task.attachments.length}
                numberOfComments={1}
                onTaskClickHandler={onTaskClickHandler}
                onCreateTaskHandler={onCreateTaskHandler}
              />
            </div>
          )}
        </Draggable>
      ))}
      <BlueButton onClick={() => onTaskInitializeHandler(columnId)} rightIcon={<BsPlusLg />}>
        Add another card
      </BlueButton>
    </div>
  )
}

export default KanbanColumn

import { BsPlusLg } from 'react-icons/all'
import { Text } from '@mantine/core'
import { Draggable } from 'react-beautiful-dnd'
import useStyles from './style'
import Task, { TaskType } from '../Task/Task'
import BlueBtn from '../BlueBtn/BlueBtn'
import { GenerateTaskType } from '../../logic/generateTask'

type KanbanColumnProps = TaskType & {
  tasks: GenerateTaskType[]
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
      <BlueBtn onClick={onAddHandler} rightIcon={<BsPlusLg />}>
        Add another list
      </BlueBtn>
    </div>
  ) : (
    <div className={classes.column}>
      <Text className={classes.title}>{title}</Text>
      {tasks.map((task, index) => (
        <Draggable draggableId={task.id} key={task.id} index={index}>
          {(provided) => (
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
                imageCover={task.imageCoverURL}
                assignedUsers={task.assigneeList}
                numberOfAttachments={task.attachment.length}
                numberOfComments={1}
                onTaskClickHandler={onTaskClickHandler}
                onCreateTaskHandler={onCreateTaskHandler}
              />
            </div>
          )}
        </Draggable>
      ))}
      <BlueBtn onClick={() => onTaskInitializeHandler(columnId)} rightIcon={<BsPlusLg />}>
        Add another card
      </BlueBtn>
    </div>
  )
}

export default KanbanColumn

import PropTypes from 'prop-types'
import { BsPlusLg } from 'react-icons/all'
import { Text } from '@mantine/core'
import { Draggable } from 'react-beautiful-dnd'
import useStyles from './style'
import Task from '../Task/Task'
import BlueBtn from '../BlueBtn/BlueBtn'

const KanbanColumn = ({
  columnId,
  title,
  tasks,
  onAddHandler,
  onTaskInitializeHandler,
  onTaskClickHandler,
  onCreateTaskHandler
}) => {
  const { classes } = useStyles()

  return title === undefined && tasks.length === 0 ? (
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
                clickEventHandler={onTaskClickHandler}
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

KanbanColumn.propTypes = {
  title: PropTypes.string
}

export default KanbanColumn

import PropTypes from 'prop-types'
import { BsPlusLg } from 'react-icons/all'
import { Text } from '@mantine/core'
import useStyles from './style'
import Task from '../Task/Task'
import BlueBtn from '../BlueBtn/BlueBtn'

const KanbanColumn = ({ title, tasks, onAddHandler }) => {
  const { classes } = useStyles()
  return title === undefined && tasks === undefined ? (
    <div className={classes.column}>
      <BlueBtn onClick={onAddHandler} rightIcon={<BsPlusLg />}>
        Add another list
      </BlueBtn>
    </div>
  ) : (
    <div className={classes.column}>
      <Text className={classes.title}>{title}</Text>
      {tasks.map((task) => (
        <div className={classes.task} key={task.uuid}>
          <Task title={task.title} imageCover={task.imageCover} assignedUsers={task.assigneeList} />
        </div>
      ))}
      <BlueBtn onClick={onAddHandler} rightIcon={<BsPlusLg />}>
        Add another card
      </BlueBtn>
    </div>
  )
}
KanbanColumn.propTypes = {
  title: PropTypes.string
}

export default KanbanColumn

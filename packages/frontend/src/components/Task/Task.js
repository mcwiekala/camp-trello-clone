import { Button, Image, Input, Text } from '@mantine/core'
import { BsPaperclip, MdMessage } from 'react-icons/all'
import { MdAdd } from 'react-icons/md'
import { useState } from 'react'
import PropTypes from 'prop-types'
import useStyles from './style'
import UserIconList from '../UserIconList/UserIconList'

const Task = ({
  title,
  imageCover,
  assignedUsers,
  clickEventHandler,
  numberOfComments,
  numberOfAttachments,
  onCreateTaskHandler
}) => {
  const { classes } = useStyles()
  const [newTitle, setNewTitle] = useState()
  return title ? (
    <div
      className={classes.taskMain}
      onClick={clickEventHandler}
      onKeyUp={(e) => {
        if (e.which === 13) {
          clickEventHandler()
        }
      }}
      role="button"
      tabIndex={0}
    >
      {imageCover ? <Image src={imageCover} alt="cover" fit="cover" radius="md" /> : null}
      <Text className={classes.title}>{title}</Text>
      <div className={classes.attachment}>
        <UserIconList listOfUsers={assignedUsers} isAppendable iconLimit={3} />
        <Text className={classes.iconsAlignRight} size="sm">
          <MdMessage />
          {numberOfComments}
          <BsPaperclip />
          {numberOfAttachments}
        </Text>
      </div>
    </div>
  ) : (
    <div className={classes.taskMain}>
      <Input
        className={classes.input}
        placeholder="Add title"
        radius="md"
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <Button leftIcon={<MdAdd />} className={classes.buttonSave} onClick={onCreateTaskHandler}>
        Save
      </Button>
    </div>
  )
}
Task.propTypes = {
  title: PropTypes.string,
  imageCover: PropTypes.string,
  assignedUsers: PropTypes.instanceOf(Array),
  clickEventHandler: PropTypes.func,
  numberOfComments: PropTypes.number,
  numberOfAttachments: PropTypes.number,
  onCreateTaskHandler: PropTypes.func
}

export default Task

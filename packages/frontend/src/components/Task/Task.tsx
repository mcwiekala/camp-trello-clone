import { Button, Image, Input, Text } from '@mantine/core'
import { BsPaperclip, MdMessage } from 'react-icons/all'
import { MdAdd } from 'react-icons/md'
import { useState } from 'react'
import UserType from '../../types/user'
import UserIconList from '../UserIconList/UserIconList'
import useStyles from './style'

type TaskProps = {
  columnId: string
  title: string
  onTaskClickHandler: (taskId: string, columnId: string) => void
  onCreateTaskHandler: (taskId: string, columnId: string) => void
  id: string
  imageCover: string | null
  assignedUsers: UserType[]
  numberOfComments: number
  numberOfAttachments: number
}

const Task = ({
  id,
  columnId,
  title,
  imageCover,
  assignedUsers,
  onTaskClickHandler,
  numberOfComments,
  numberOfAttachments,
  onCreateTaskHandler
}: TaskProps) => {
  const { classes } = useStyles()
  const [newTitle, setNewTitle] = useState('')

  return title ? (
    <div
      className={classes.taskMain}
      onClick={() => onTaskClickHandler(id, columnId)}
      onKeyUp={(e) => {
        if (e.code === 'Enter') {
          onTaskClickHandler(id, columnId)
        }
      }}
      role="button"
      tabIndex={0}
    >
      {imageCover ? (
        <Image src={imageCover} alt="cover" fit="cover" radius="md" height="170px" />
      ) : null}
      <Text className={classes.title}>{title}</Text>
      <div className={classes.attachment}>
        <UserIconList
          listOfUsers={assignedUsers}
          isAppendable
          iconLimit={3}
          displayNumberOfUsers={false}
        />
        <Text className={classes.iconsAlignRight} size="sm">
          <div>
            <MdMessage />
            {numberOfComments}
          </div>
          <div>
            <BsPaperclip />
            {numberOfAttachments}
          </div>
        </Text>
      </div>
    </div>
  ) : (
    <div className={classes.taskMain}>
      <Input
        className={classes.input}
        placeholder="Add title"
        radius="md"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTitle(e.target.value)}
      />
      <Button
        leftIcon={<MdAdd />}
        className={classes.buttonSave}
        onClick={() => onCreateTaskHandler(id, newTitle)}
      >
        Save
      </Button>
    </div>
  )
}

export default Task

import { useState } from 'react'
import { Button } from '@mantine/core'
import GenerateAttachment from '../logic/generateAttachment'
import GenerateComment from '../logic/generateComment'
import MembersList from './MembersList/MembersList'
import MemberCardContainer from './MemberCardContainer/MemberCardContainer'
import RandomUser from '../logic/randomUser'
import TaskModal from './TaskModal/TaskModal'
import GenerateTask from '../logic/generateTask'

export const Dummy = () => {
  const [isOpen, setIsOpen] = useState(false)
  const attachmentList = []
  for (let i = 0; i < 3; i += 1) {
    attachmentList.push(new GenerateAttachment().getAttachment)
  }
  const CommentList = [new GenerateComment().getComment, new GenerateComment().getComment]
  const memberList = [
    new RandomUser().getUser,
    new RandomUser().getUser,
    new RandomUser().getUser,
    new RandomUser().getUser,
    new RandomUser().getUser,
    new RandomUser().getUser,
    new RandomUser().getUser,
    new RandomUser().getUser,
    new RandomUser().getUser,
    new RandomUser().getUser
  ]

  const onCloseHandler = (newObj) => {
    console.log(newObj)
  }
  const funcOpen = () => {
    setIsOpen((prevStateIsOpen) => !prevStateIsOpen)
  }
  const taskList = new GenerateTask(memberList).getTask
  return (
    <div>
      <Button onClick={funcOpen}>otwórz Modal</Button>
      <TaskModal
        task={taskList}
        setIsOpen={funcOpen}
        isOpen={isOpen}
        membersList={memberList}
        onCloseHandler={onCloseHandler}
        commentsList={CommentList}
      />
    </div>
  )
}

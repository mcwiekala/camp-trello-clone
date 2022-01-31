/* eslint-disable max-len */
/* eslint-disable no-console */
import { useState } from 'react'
import { Modal, Text, Button } from '@mantine/core'
import { IoMdClose } from 'react-icons/io'
import Description from '../Description/Description'
import AttachmentsList from '../AttachmentsList/AttachmentsList'
import { AttachmentType } from '../Attachment/Attachment'
import useStyles from './style'
import GenerateAttachment from '../../logic/generateAttachment'
import CommentInput from '../CommentInput/CommentInput'
import Comment from '../Comment/Comment'
import RandomUser from '../../logic/randomUser.js'

// TODO Should receive: task object on close handler (on close handler receives updated task object).
// TODO Should store task data as state
// TODO Should implement logic for handling values change (example: onDescriptionSaved, onCommentAdded etc.)

type TaskModalProps = {
  title: string
  description: string
  coverImageURL?: string
  attachments: AttachmentType[]
  comments: {
    textContent: string
    date: Date
    id: string
    userData: { profilePicture?: string; username: string; uuid: string; role: string }
  }[]
  // onCloseHandler: (task: { description: string; attachments: AttachmentType[] }) => void
  // isOpened: boolean
  // members: {
  //   username: string
  //   id: string
  //   imgUrl?: string
  // }[]
}

const TaskModal = ({
  title,
  description,
  coverImageURL,
  attachments,
  comments
}: // onCloseHandlers
TaskModalProps) => {
  const { classes } = useStyles()
  const [opened, setOpened] = useState(false)
  const [currentDescription, setCurrentDescription] = useState(description)
  const [currentAttachments, setCurrentAttachments] = useState(attachments)
  const [currentComments, setCurrentComments] = useState(comments)
  const updateAttachments = (newAttachment: AttachmentType) => {
    console.log('Attachment Add')
    setCurrentAttachments((prevCurrentAttachments: TaskModalProps['attachments']) => [
      ...prevCurrentAttachments,
      newAttachment
    ])
  }
  const attachmentOnAddHandler = () => {
    const newAttachment = new GenerateAttachment().getAttachment()
    updateAttachments(newAttachment)
  }
  const attachmentOnDeleteHandler = (deleteId: string) => {
    setCurrentAttachments((prevCurrentAttachments) =>
      prevCurrentAttachments.filter(({ id }) => id !== deleteId)
    )
  }
  const commentOnDeleteHandler = (deleteId: string) => {
    setCurrentComments((prevCurrentComments) =>
      prevCurrentComments.filter(({ id }) => id !== deleteId)
    )
  }
  const onClose = () => {
    // onCloseHandler({ description: currentDescription, attachments: currentAttachments })
    setOpened(false)
  }
  const handleCommentEdit = (editedId: string, editedText: string) => {
    const editedCommentIndex = currentComments.findIndex(({ id }) => id === editedId)
    if (editedCommentIndex !== -1) {
      const newComments = [...currentComments]
      newComments[editedCommentIndex] = {
        ...newComments[editedCommentIndex],
        textContent: editedText
      }
      setCurrentComments(newComments)
      console.log(currentComments)
    }
  }
  // const handleCommentAdd = (commentContent: string) => {
  //   const generatedUser = new RandomUser().generateRole()
  //   setCurrentComments((prevCurrentComments) => [
  //     ...prevCurrentComments,
  //     { userData: generatedUser }
  //   ])
  // }
  return (
    <>
      <Modal
        className={classes.modal}
        opened={opened}
        onClose={onClose}
        centered
        hideCloseButton
        overflow="inside"
        size="70%"
      >
        <Button className={classes.closeButton} onClick={onClose}>
          <IoMdClose />
        </Button>
        {coverImageURL ? (
          <img src={coverImageURL} className={classes.coverImage} alt="Cover" />
        ) : null}
        <section className={classes.container}>
          <div className={classes.column}>
            <Text className={classes.title}>{title}</Text>
            <Description
              initialText={currentDescription}
              onTextSavedHandler={
                (descriptionText: string) => setCurrentDescription(descriptionText)
                // eslint-disable-next-line react/jsx-curly-newline
              }
            />
            <AttachmentsList
              attachments={currentAttachments}
              onAddHandler={attachmentOnAddHandler}
              onDeleteHandler={attachmentOnDeleteHandler}
            />
            {/* <CommentInput onSubmitHandler={handleCommentAdd} /> */}
            {currentComments.map(({ textContent, date, userData, id }) => (
              <Comment
                textContent={textContent}
                date={date}
                userData={userData}
                id={id}
                key={id}
                onDeleteHandler={commentOnDeleteHandler}
                onEditHandler={handleCommentEdit}
              />
            ))}
          </div>
          <div className={classes.sidebar}>Margin between columns</div>
        </section>
      </Modal>
      <div className={classes.cont}>
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </div>
    </>
  )
}

export default TaskModal

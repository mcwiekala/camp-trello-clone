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

// packages/frontend/src/logic/generateAttachment.js

// TODO Should receive: task object on close handler (on close handler receives updated task object).
// TODO Should store task data as state
// TODO Should implement logic for handling values change (example: onDescriptionSaved, onCommentAdded etc.)

type TaskModalProps = {
  title: string
  description: string
  coverImageURL?: string
  attachments: AttachmentType[]
  onCloseHandler: (task: { description: string; attachments: AttachmentType[] }) => void
  // isOpened: boolean
  // members: {
  //   username: string
  //   id: string
  //   imgUrl?: string
  // }[]
  // comments: {
  //   textContent: string
  //   date: string
  //   isEditable: boolean
  //   userData: { name: string; id: string; profilePicture: string }
  // TODO toggleEditStateHandler
  // TODO onDeleteHandler
  // TODO onValueChangeHandler -> input
  // TODO onSubmitHandler -> input
  // TODO onCancelHandler
  // }[]
}

const TaskModal = ({
  title,
  description,
  coverImageURL,
  attachments,
  onCloseHandler
}: // comments
TaskModalProps) => {
  const { classes } = useStyles()
  const [opened, setOpened] = useState(false)
  const [currentDescription, setCurrentDescription] = useState(description)
  const [currentAttachments, setCurrentAttachments] = useState(attachments)
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
  const onClose = () => {
    onCloseHandler({ description: currentDescription, attachments: currentAttachments })
  }
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

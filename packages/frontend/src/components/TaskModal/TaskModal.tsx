import { useState } from 'react'
import { Button, Modal, Text } from '@mantine/core'
import { AiOutlinePlus, IoMdContact } from 'react-icons/all'
import Description from '../Description/Description'
import AttachmentsList from '../AttachmentsList/AttachmentsList'
import useStyles from './style'
import GenerateAttachment, { GenerateAttachmentType } from '../../logic/generateAttachment'
import Comment from '../Comment/Comment'
import CommentInput from '../CommentInput/commentInput'
import GenerateComment, { GenerateCommentType } from '../../logic/generateComment'
import ImagePicker from '../ImagePicker/ImagePicker'
import MembersList from '../MembersList/MembersList'
import { RandomUserType } from '../../logic/randomUser'
import BlueBtn from '../BlueBtn/BlueBtn'
import MemberCardContainer from '../MemberCardContainer/MemberCardContainer'
import { GenerateTaskType } from '../../logic/generateTask'

type TaskModalProps = {
  isOpen: boolean
  setIsOpen: () => void
  membersList: RandomUserType[]
  task: GenerateTaskType
  commentsList: GenerateCommentType[]
  onCloseHandler: (tasks: {
    membersList: RandomUserType[]
    task: GenerateTaskType
    commentsList: GenerateCommentType[]
  }) => void
}

const TaskModal = ({
  setIsOpen,
  isOpen,
  task,
  commentsList,
  membersList,
  onCloseHandler
}: TaskModalProps) => {
  const { classes } = useStyles()
  const [currentDescription, setCurrentDescription] = useState(task.description)
  const [currentAttachments, setCurrentAttachments] = useState(task.attachment)
  const [currentCoverImageURL, setCurrentCoverImageURL] = useState(task.imageCoverURL)
  const [currentAssigneesList, setCurrentAssigneesList] = useState(task.assigneeList)
  const [currentComments, setCurrentComments] = useState(commentsList)
  const [currentInputComment, setCurrentInputComment] = useState('')
  const [visibleImagePicker, setVisibleImagePicker] = useState(false)
  const [visibleMemberList, setVisibleMemberList] = useState(false)
  const [currentMemberList, setCurrentMemberList] = useState(membersList)

  const attachmentOnAddHandler = () => {
    const newAttachment: GenerateAttachmentType = new GenerateAttachment().getAttachment
    setCurrentAttachments((prevState: GenerateAttachmentType[]) => [...prevState, newAttachment])
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
  const onCloseModalWindowHandler = () => {
    onCloseHandler({
      membersList: currentMemberList,
      commentsList: currentComments,
      task: {
        id: task.id,
        imageCoverURL: currentCoverImageURL,
        title: task.title,
        description: currentDescription,
        attachment: currentAttachments,
        assigneeList: currentAssigneesList
      }
    })
    setIsOpen()
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
    }
  }

  const onSubmitCommentInputHandler = () => {
    const fakeComment = new GenerateComment().getComment
    fakeComment.textContent = currentInputComment
    fakeComment.date = new Date()
    setCurrentComments((prevState) => [...prevState, fakeComment])
  }

  const onImagePickerHandler = (val: string) => {
    setCurrentCoverImageURL(val)
  }
  const addUserHandler = (selectedUsersID: string[]) => {
    selectedUsersID.forEach((idd: string) => {
      const newAssigneeIndex = currentMemberList.findIndex(({ id }) => id === idd)
      const newAssignee = currentMemberList[newAssigneeIndex]
      setCurrentAssigneesList((prevState: RandomUserType[]) => [...prevState, newAssignee])
    })
  }
  const onAssigneesListDeleteHandler = (deletedID: string) => {
    const editedCommentIndex = currentAssigneesList.findIndex(({ id }) => id === deletedID)
    if (editedCommentIndex !== -1) {
      const newAssigneesList = [...currentAssigneesList]
      newAssigneesList.splice(editedCommentIndex, 1)
      setCurrentAssigneesList(newAssigneesList)
    }
  }

  return (
    <Modal
      className={classes.modal}
      classNames={{ close: classes.closeButton }}
      opened={isOpen}
      onClose={onCloseModalWindowHandler}
      centered
      overflow="inside"
      size="70%"
    >
      {currentCoverImageURL ? (
        <img src={currentCoverImageURL} className={classes.coverImage} alt="Cover" />
      ) : null}
      <section className={classes.container}>
        <div className={classes.column}>
          <Text className={classes.title}>{task.title}</Text>
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
          <CommentInput
            onValueChangedHandler={setCurrentInputComment}
            onSubmitHandler={onSubmitCommentInputHandler}
          />
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
        <div className={classes.sidebar}>
          <header>
            <IoMdContact className={classes.title} />
            <Text className={classes.title}>Description</Text>
          </header>
          <Button onClick={() => setVisibleImagePicker((prevState: boolean) => !prevState)}>
            Change Image
          </Button>
          {visibleImagePicker ? (
            <ImagePicker imageSize="small" onImageSelectedHandler={onImagePickerHandler} />
          ) : null}
          <MembersList
            membersList={currentAssigneesList}
            onDeleteHandler={onAssigneesListDeleteHandler}
            isDeletable
          />
          <BlueBtn
            onClick={() => setVisibleMemberList((prevState: boolean) => !prevState)}
            rightIcon={<AiOutlinePlus />}
          >
            Member list
          </BlueBtn>
          {visibleMemberList ? (
            <MemberCardContainer membersList={currentMemberList} addUserHandler={addUserHandler} />
          ) : null}
        </div>
      </section>
    </Modal>
  )
}

export default TaskModal

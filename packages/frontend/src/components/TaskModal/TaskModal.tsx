import { useState } from 'react'
import { Popover, Modal, Text } from '@mantine/core'
import { AiOutlinePlus } from 'react-icons/ai'
import { IoMdContact } from 'react-icons/io'
import { MdImage } from 'react-icons/md'
import { UserDTO, TaskDTO, AttachmentDTO } from 'shared'
import Description from '../Description/Description'
import AttachmentsList from '../AttachmentsList/AttachmentsList'
import Comment from '../Comment/Comment'
import CommentInput from '../CommentInput/CommentInput'
import ImagePicker, { pickerImagesSizes } from '../ImagePicker/ImagePicker'
import MembersList from '../MembersList/MembersList'
import MemberCardContainer from '../MemberCardContainer/MemberCardContainer'
import BlueButton from '../BlueButton/BlueButton'
import GrayButtonFilled from '../GrayButtonFilled/GrayButtonFilled'
import GenerateAttachment from '../../logic/generateAttachment'
import GenerateComment from '../../logic/generateComment'
import AttachmentType from '../../types/attachment'
import CommentType from '../../types/comment'
import TaskType from '../../types/task'
import UserType from '../../types/user'
import useStyles from './style'

const MODAL_SIZE = 'clamp(1000px, 70%, 2000px)'

type TaskModalProps = {
  isOpen: boolean
  task: TaskDTO
  membersList: UserDTO[]
  commentsList: CommentType[]
  onCloseHandler: (task: TaskDTO & { comments: CommentType[] }) => void
}

const TaskModal = ({ isOpen, task, commentsList, membersList, onCloseHandler }: TaskModalProps) => {
  const { classes } = useStyles()
  const [currentDescription, setCurrentDescription] = useState(task.description)
  const [currentAttachments, setCurrentAttachments] = useState(task.attachments)
  const [currentCoverImageURL, setCurrentCoverImageURL] = useState(task.imageCoverId)
  const [currentAssigneesList, setCurrentAssigneesList] = useState(task.assigneeList)
  const [currentComments, setCurrentComments] = useState(commentsList)
  const [currentInputComment, setCurrentInputComment] = useState('')
  const [visibleImagePicker, setVisibleImagePicker] = useState(false)
  const [visibleMemberList, setVisibleMemberList] = useState(false)
  const [currentMemberList, setCurrentMemberList] = useState(membersList)

  const attachmentOnAddHandler = () => {
    // TODO add attachement
    // const newAttachment: AttachmentDTO = new GenerateAttachment().getAttachment
    // setCurrentAttachments((prevState: AttachmentDTO[]) => [...prevState, newAttachment])
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
      imageCoverId: task.imageCoverId,
      id: task.id,
      title: task.title,
      description: currentDescription,
      attachments: currentAttachments,
      assigneeList: currentAssigneesList,
      comments: currentComments
    })
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
    if (currentInputComment !== '') {
      const fakeComment = new GenerateComment().getComment
      fakeComment.textContent = currentInputComment
      fakeComment.date = new Date()
      setCurrentComments((prevState) => [...prevState, fakeComment])
      setCurrentInputComment('')
    }
  }

  const onImagePickerHandler = (val: string) => {
    setCurrentCoverImageURL(val)
  }

  const addUserHandler = (selectedUsersID: string[]) => {
    const newAssignees = selectedUsersID
      .map((selectedUserID) => currentMemberList.find(({ _id }) => _id === selectedUserID))
      .filter((assignee) => assignee) as UserDTO[]
    setCurrentAssigneesList((prevState) => [...prevState, ...newAssignees])
    setCurrentMemberList((prevState) =>
      prevState.filter((member) => !selectedUsersID.some((selectedId) => selectedId === member._id))
    )
  }

  const onAssigneesListDeleteHandler = (deletedID: string) => {
    const editedCommentIndex = currentAssigneesList.findIndex(({ _id }) => _id === deletedID)
    if (editedCommentIndex !== -1) {
      const newAssigneesList = [...currentAssigneesList]
      newAssigneesList.splice(editedCommentIndex, 1)
      setCurrentAssigneesList(newAssigneesList)
    }
  }

  return (
    <Modal
      className={classes.modal}
      classNames={{ close: classes.closeButton, header: classes.modalTitle }}
      opened={isOpen}
      onClose={onCloseModalWindowHandler}
      centered
      overflow="inside"
      size={MODAL_SIZE}
    >
      {currentCoverImageURL ? (
        <img src={currentCoverImageURL} className={classes.coverImage} alt="Cover" />
      ) : null}
      <section className={classes.container}>
        <div className={classes.column}>
          <Text className={classes.title}>{task.title}</Text>
          <Description
            initialText={currentDescription}
            onTextSavedHandler={(descriptionText: string) => setCurrentDescription(descriptionText)}
          />
          <AttachmentsList
            attachments={currentAttachments}
            onAddHandler={attachmentOnAddHandler}
            onDeleteHandler={attachmentOnDeleteHandler}
          />
          <CommentInput
            onValueChangedHandler={setCurrentInputComment}
            onSubmitHandler={onSubmitCommentInputHandler}
            value={currentInputComment}
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
          <section className={classes.actionSection}>
            <header className={classes.sidebarHeader}>
              <IoMdContact className={classes.sectionTitle} />
              <Text className={classes.sectionTitle}>Actions</Text>
            </header>
            <Popover
              opened={visibleImagePicker}
              onClose={() => setVisibleImagePicker(false)}
              target={
                <GrayButtonFilled
                  onClick={() => setVisibleImagePicker((prevState: boolean) => !prevState)}
                  leftIcon={<MdImage />}
                >
                  Cover
                </GrayButtonFilled>
              }
              position="bottom"
              placement="start"
              width={300}
              spacing={0}
              radius="md"
              classNames={{ target: classes.popTarget }}
            >
              <ImagePicker
                imageSize={pickerImagesSizes.regular}
                onImageSelectedHandler={onImagePickerHandler}
              />
            </Popover>
          </section>
          <MembersList
            membersList={currentAssigneesList}
            onDeleteHandler={onAssigneesListDeleteHandler}
            isDeletable
          />
          <Popover
            opened={visibleMemberList}
            onClose={() => setVisibleMemberList(false)}
            target={
              <BlueButton
                onClick={() => setVisibleMemberList((prevState: boolean) => !prevState)}
                rightIcon={<AiOutlinePlus />}
              >
                Assign a member
              </BlueButton>
            }
            position="bottom"
            placement="start"
            width={300}
            spacing={0}
            radius="md"
          >
            <MemberCardContainer membersList={currentMemberList} addUserHandler={addUserHandler} />
          </Popover>
        </div>
      </section>
    </Modal>
  )
}

export default TaskModal

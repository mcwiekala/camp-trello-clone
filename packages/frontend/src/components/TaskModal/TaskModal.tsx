import { useState } from 'react'
import { Popover, Modal, Text } from '@mantine/core'
import { AiOutlinePlus, IoMdContact, MdImage } from 'react-icons/all'

// Components
import Description from '../Description/Description'
import AttachmentsList from '../AttachmentsList/AttachmentsList'
import Comment from '../Comment/Comment'
import CommentInput from '../CommentInput/CommentInput'
import ImagePicker, { pickerImagesSizes } from '../ImagePicker/ImagePicker'
import MembersList from '../MembersList/MembersList'
import MemberCardContainer from '../MemberCardContainer/MemberCardContainer'
import BlueBtn from '../BlueBtn/BlueBtn'
import GrayButtonFilled from '../GrayButtonFilled/GrayButtonFilled'

// Logic
import GenerateAttachment, { GenerateAttachmentType } from '../../logic/generateAttachment'
import GenerateComment, { GenerateCommentType } from '../../logic/generateComment'
import { RandomUserType } from '../../logic/randomUser'
import { GenerateTaskType } from '../../logic/generateTask'

import useStyles from './style'

const MODAL_SIZE = 'clamp(1000px, 70%, 2000px)'

type TaskModalProps = {
  isOpen: boolean
  task: GenerateTaskType
  membersList: RandomUserType[]
  commentsList: GenerateCommentType[]
  onCloseHandler: (task: GenerateTaskType & { comments: GenerateCommentType[] }) => void
}

const TaskModal = ({ isOpen, task, commentsList, membersList, onCloseHandler }: TaskModalProps) => {
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
      id: task.id,
      imageCoverURL: currentCoverImageURL,
      title: task.title,
      description: currentDescription,
      attachment: currentAttachments,
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
      .map((selectedUserID) => currentMemberList.find(({ id }) => id === selectedUserID))
      .filter((assignee) => assignee) as RandomUserType[]
    setCurrentAssigneesList((prevState) => [...prevState, ...newAssignees])
    setCurrentMemberList((prevState) =>
      prevState.filter((member) => !selectedUsersID.some((selectedId) => selectedId === member.id))
    )
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
              <BlueBtn
                onClick={() => setVisibleMemberList((prevState: boolean) => !prevState)}
                rightIcon={<AiOutlinePlus />}
              >
                Assign a member
              </BlueBtn>
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

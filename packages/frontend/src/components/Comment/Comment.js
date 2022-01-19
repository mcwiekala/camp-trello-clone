import { Avatar, Container, Textarea } from '@mantine/core'
import useStyles from './style'
import ButtonComment from './ButtonComment'

const Comment = ({
  textContent,
  date,
  toggleEditStateHandler,
  onDeleteHandler,
  onValueChange,
  onSubmit,
  isEditable,
  onCancelHandler,
  userData
}) => {
  const { classes } = useStyles()

  return (
    <Container>
      <div className={classes.divUserInfo}>
        <Avatar radius="md" src={userData.profilePicture} />

        <div>
          <div className={classes.name}>{userData.name}</div>
          <div className={classes.date}>{date}</div>
        </div>

        {!isEditable ? (
          <div className={classes.divButtons}>
            <ButtonComment onClickEvent={toggleEditStateHandler}>Edit</ButtonComment>
            <span>-</span>
            <ButtonComment onClickEvent={onDeleteHandler}>Delete</ButtonComment>
          </div>
        ) : (
          <div className={classes.divButtons}>
            <ButtonComment onClickEvent={onSubmit}>Save</ButtonComment>
            <span>-</span>
            <ButtonComment onClickEvent={onCancelHandler}>Cancel</ButtonComment>
          </div>
        )}
      </div>
      {!isEditable ? (
        <div className={classes.divComment}>{textContent}</div>
      ) : (
        <div className={classes.divComment}>
          <Textarea defaultValue={textContent} onChange={onValueChange} />
        </div>
      )}
    </Container>
  )
}

export default Comment

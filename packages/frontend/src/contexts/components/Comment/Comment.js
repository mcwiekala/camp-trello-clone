import { Container, Image, Textarea } from '@mantine/core'
import useStyles from './Style'
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
    <div>
      <Container>
        <div className={classes.DivTop}>
          <Image width={32} height={32} radius="md" alt="profile" src={userData.profilePicture} />

          <div>
            <div className={classes.Name}>{userData.name}</div>
            <div className={classes.Date}>{date}</div>
          </div>

          {!isEditable ? (
            <div className={classes.DivButtons}>
              <ButtonComment onClickEvent={toggleEditStateHandler} text="Edit" />
              -
              <ButtonComment onClickEvent={onDeleteHandler} text="Delete" />
            </div>
          ) : (
            <div className={classes.DivButtons}>
              <ButtonComment onClickEvent={onSubmit} text="Save" />
              -
              <ButtonComment onClickEvent={onCancelHandler} text="Cancel" />
            </div>
          )}
        </div>
        {!isEditable ? (
          <div>{textContent}</div>
        ) : (
          <div>
            <Textarea defaultValue={textContent} onChange={onValueChange} />
          </div>
        )}
      </Container>
    </div>
  )
}

export default Comment

import { useState } from 'react'
import { Avatar, Container, Textarea } from '@mantine/core'
import { getHotkeyHandler } from '@mantine/hooks'
import useStyles from './style'
import ButtonComment from './ButtonComment'

const Comment = ({ id, userData, textContent, date, onDeleteHandler, onEditHandler }) => {
  const { classes } = useStyles()
  const [editability, setEditability] = useState(true)
  const [currentContent, setCurrentContent] = useState(textContent)

  const newDate = date.toLocaleDateString('pl-PL', {
    timeZone: 'CET',
    month: 'long',
    day: '2-digit',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  })
  return (
    <Container>
      <div className={classes.divUserInfo}>
        <Avatar radius="md" src={userData.profilePictureURL} />

        <div>
          <div className={classes.name}>{userData.firstName}</div>
          <div className={classes.date}>{newDate}</div>
        </div>

        {editability ? (
          <div className={classes.divButtons}>
            <ButtonComment onClickEvent={() => setEditability(false)}>Edit</ButtonComment>
            <span>-</span>
            <ButtonComment onClickEvent={() => onDeleteHandler(id)}>Delete</ButtonComment>
          </div>
        ) : (
          <div className={classes.divButtons}>
            <ButtonComment
              onClickEvent={() => {
                setEditability(true)
                onEditHandler(id, currentContent)
              }}
            >
              Save
            </ButtonComment>
            <span>-</span>
            <ButtonComment onClickEvent={() => setEditability(true)}>Cancel</ButtonComment>
          </div>
        )}
      </div>
      {editability ? (
        <div className={classes.divComment}>{currentContent}</div>
      ) : (
        <div className={classes.divComment}>
          <Textarea
            defaultValue={currentContent}
            onChange={(e) => {
              setCurrentContent(e.target.value)
            }}
            onKeyDown={getHotkeyHandler([
              [
                'shift+Enter',
                () => {
                  setEditability(true)
                  onEditHandler(id, currentContent)
                }
              ]
            ])}
          />
        </div>
      )}
    </Container>
  )
}

export default Comment

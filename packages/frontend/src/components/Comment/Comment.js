import { useState } from 'react'
import { Avatar, Container, Textarea } from '@mantine/core'
import { getHotkeyHandler } from '@mantine/hooks'
import useStyles from './style'
import ButtonComment from './ButtonComment'
import { localeDateStringFormat } from '../../constants/localeDateStringFormat'

const Comment = ({ id, userData, textContent, date, onDeleteHandler, onEditHandler }) => {
  const { classes } = useStyles()
  const [isInEditionMode, setIsInEditionMode] = useState(true)
  const [currentContent, setCurrentContent] = useState(textContent)
  const newDate = date.toLocaleDateString('pl-PL', localeDateStringFormat)

  return (
    <Container>
      <div className={classes.divUserInfo}>
        <Avatar radius="md" src={userData.profilePictureURL} />

        <div>
          <div className={classes.name}>{userData.username}</div>
          <div className={classes.date}>{newDate}</div>
        </div>

        {isInEditionMode ? (
          <div className={classes.divButtons}>
            <ButtonComment onClickEvent={() => setIsInEditionMode(false)}>Edit</ButtonComment>
            <span>-</span>
            <ButtonComment onClickEvent={() => onDeleteHandler(id)}>Delete</ButtonComment>
          </div>
        ) : (
          <div className={classes.divButtons}>
            <ButtonComment
              onClickEvent={() => {
                setIsInEditionMode(true)
                onEditHandler(id, currentContent)
              }}
            >
              Save
            </ButtonComment>
            <span>-</span>
            <ButtonComment onClickEvent={() => setIsInEditionMode(true)}>Cancel</ButtonComment>
          </div>
        )}
      </div>
      {isInEditionMode ? (
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
                  setIsInEditionMode(true)
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

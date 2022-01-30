import { useState, useRef } from 'react'
import { Button, Text } from '@mantine/core'
import { RichTextEditor } from '@mantine/rte'
import { IoDocumentText, FaPen } from 'react-icons/all'
import GrayButton from '../GrayButton/GrayButton'
import useStyles from './style'

const Description = ({ initialText, onTextSavedHandler }) => {
  const [text, setText] = useState(initialText)
  const [isEditing, setEditing] = useState(false)
  const refText = useRef(initialText)

  const { classes } = useStyles()

  const triggerEdit = () => {
    setEditing(!isEditing)
  }
  const onCancelHandler = () => {
    setText(refText.current)
    triggerEdit()
  }
  const onSaveText = () => {
    refText.current = text
    triggerEdit()
    onTextSavedHandler(text)
  }

  return (
    <div>
      <header className={classes.descriptionHeader}>
        <IoDocumentText className={classes.title} />
        <Text className={classes.title}>Description</Text>
        {isEditing ? null : (
          <GrayButton
            className={classes.button}
            radius={8}
            leftIcon={<FaPen />}
            onClick={triggerEdit}
          >
            Edit
          </GrayButton>
        )}
      </header>
      {isEditing ? (
        <div className={classes.textEditorArea}>
          <RichTextEditor
            classNames={{
              root: classes.rootTextEditor,
              toolbar: classes.toolbarInner
            }}
            controls={[
              ['bold', 'italic', 'underline', 'strike', 'clean'],
              ['h1', 'h2', 'h3', 'h4'],
              ['unorderedList', 'orderedList'],
              ['link', 'blockquote', 'codeBlock'],
              ['alignLeft', 'alignCenter', 'alignRight'],
              ['sup', 'sub']
            ]}
            value={text}
            onChange={setText}
          />
          <div className={classes.buttonsArea}>
            <Button radius="md" color="green" onClick={onSaveText}>
              Save
            </Button>
            <Button variant="subtle" color="gray" onClick={onCancelHandler}>
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <div className={classes.textEditorArea}>
          <RichTextEditor readOnly value={text} onChange={setText} />
        </div>
      )}
    </div>
  )
}

export default Description

import { Text } from '@mantine/core'
import { FC } from 'react'
import { IoDocumentText } from 'react-icons/io5'
import { MdAdd } from 'react-icons/md'
import { AttachmentDTO } from 'shared'
import Attachment from '../Attachment/Attachment'
import GrayButton from '../GrayButton/GrayButton'
import AttachmentType from '../../types/attachment'
import useStyles from './style'

export type AttachmentsListProps = {
  attachments: AttachmentDTO[]
  onAddHandler: (e?: React.MouseEvent<HTMLElement>) => void
  onDeleteHandler: (id: string) => void
}

const AttachmentsList: FC<AttachmentsListProps> = ({
  attachments,
  onAddHandler,
  onDeleteHandler
}) => {
  const { classes } = useStyles()

  return (
    <>
      <header className={classes.attachmentHeader}>
        <IoDocumentText className={classes.title} />
        <Text className={classes.title}>Attachments</Text>
        <GrayButton
          leftIcon={<MdAdd size={22} />}
          onClick={onAddHandler}
          className={classes.grayBtn}
          radius={8}
        >
          Add
        </GrayButton>
      </header>
      {attachments.map(({ fileName, addedDate, id, taskId }) => (
        <section className={classes.attachmentSection} key={id}>
          <Attachment
            fileName={fileName}
            addedDate={addedDate}
            // itemUrl={itemUrl}
            id={id}
            onDeleteHandler={onDeleteHandler}
            taskId={taskId}
          />
        </section>
      ))}
    </>
  )
}
export default AttachmentsList

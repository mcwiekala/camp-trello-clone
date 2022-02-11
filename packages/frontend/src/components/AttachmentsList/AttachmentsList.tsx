import { Text } from '@mantine/core'
import { FC } from 'react'
import { IoDocumentText } from 'react-icons/io5'
import { MdAdd } from 'react-icons/md'
import Attachment, { AttachmentType } from '../Attachment/Attachment'
import GrayButton from '../GrayButton/GrayButton'
import useStyles from './style'

export type AttachmentsListProps = {
  attachments: AttachmentType[]
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
      {attachments.map(({ fileName, date, itemUrl, id }) => (
        <section className={classes.attachmentSection} key={id}>
          <Attachment
            fileName={fileName}
            date={date}
            itemUrl={itemUrl}
            id={id}
            onDeleteHandler={onDeleteHandler}
          />
        </section>
      ))}
    </>
  )
}
export default AttachmentsList

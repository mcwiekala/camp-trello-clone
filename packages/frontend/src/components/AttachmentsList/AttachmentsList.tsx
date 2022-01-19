import { Text } from '@mantine/core'
import { FC } from 'react'
import { IoDocumentText } from 'react-icons/io5'
import { MdAdd } from 'react-icons/md'
import Attachment from '../Attachment/Attachment'
import GrayButton from '../GrayButton/GrayButton'
import useStyles from './style'

type AttachmentsListProps = {
  attachments: { title: string; date: string; itemUrl?: string; id: number }[]
  onAddHandler: (e?: React.MouseEvent<HTMLElement>) => void
  onDeleteHandler: (e?: React.MouseEvent<HTMLElement>) => void
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
        >
          Add
        </GrayButton>
      </header>
      {attachments.map(({ title, date, itemUrl, id }) => (
        <section className={classes.attachmentSection} key={id}>
          <Attachment
            title={title}
            date={date}
            itemUrl={itemUrl}
            onDeleteHandler={onDeleteHandler}
          />
        </section>
      ))}
    </>
  )
}
export default AttachmentsList

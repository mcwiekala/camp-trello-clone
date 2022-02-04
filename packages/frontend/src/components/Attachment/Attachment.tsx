import { Image, Text } from '@mantine/core'
import GrayButton from '../GrayButton/GrayButton'
import useStyles from './style'

export type AttachmentType = {
  itemUrl?: string
  date: Date
  fileName: string
  id: string
}

type AttachmentProps = AttachmentType & {
  onDeleteHandler: (id: string) => void
}

const Attachment = ({ itemUrl, date, fileName, id, onDeleteHandler }: AttachmentProps) => {
  const { classes } = useStyles()

  const newDate = date.toLocaleDateString('pl-PL', {
    timeZone: 'CET',
    month: 'long',
    day: '2-digit',
    year: 'numeric'
  })
  const sp = newDate.split(' ')
  const attachmentDate = `${sp[1]} ${sp[0]}, ${sp[2]}`
  return (
    <div className={classes.divBody}>
      <div>
        <Image
          classNames={{ placeholder: classes.imagePlaceholder }}
          src={itemUrl}
          alt="Date"
          width={80}
          height={55}
          radius={8}
          fit="cover"
          withPlaceholder
          placeholder={<Text align="center">{fileName[0] + (fileName[1] ? fileName[1] : '')}</Text>}
        />
      </div>
      <div className={classes.divInfo}>
        <Text className={classes.date}>{`Added ${attachmentDate}`}</Text>
        <Text className={classes.title}>{fileName}</Text>
        <GrayButton
          component="a"
          href={itemUrl}
          download
          target="_blank"
          className={classes.buttonDownload}
        >
          Download
        </GrayButton>
        <GrayButton className={classes.buttonDelete} onClick={() => onDeleteHandler(id)}>
          Delete
        </GrayButton>
      </div>
    </div>
  )
}
export default Attachment

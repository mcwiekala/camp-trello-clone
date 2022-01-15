import { Image, Text } from '@mantine/core'
import GreyButton from '../GreyButton/GreyButton'
import useStyles from './style'

type AttachmentProps = {
  imageUrl?: string
  date: string | number
  title: string
  onDeleteHandler: (e?: React.MouseEvent<HTMLElement>) => void
  onDownloadHandler: (e?: React.MouseEvent<HTMLElement>) => void
}

const Attachment = ({
  imageUrl,
  date,
  title,
  onDeleteHandler,
  onDownloadHandler
}: AttachmentProps) => {
  const { classes } = useStyles()
  return (
    <div className={classes.divBody}>
      <div>
        <Image
          classNames={{ placeholder: classes.imagePlaceholder }}
          src={imageUrl}
          alt="Date"
          width={80}
          height={55}
          radius={8}
          fit="cover"
          withPlaceholder
          placeholder={<Text align="center">{title[0] + (title[1] ? title[1] : '')}</Text>}
        />
      </div>
      <div className={classes.divInfo}>
        <Text className={classes.date}>{`Added ${date}`}</Text>
        <Text className={classes.title}>{title}</Text>
        <GreyButton className={classes.buttonDownload} onClick={onDownloadHandler}>
          Download
        </GreyButton>
        <GreyButton onClick={onDeleteHandler}>Delete</GreyButton>
      </div>
    </div>
  )
}

export default Attachment

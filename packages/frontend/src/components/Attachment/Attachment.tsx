import { Image, Text } from '@mantine/core'
import GreyButton from '../GreyButton/GreyButton'
import useStyles from './style'

type AttachmentProps = {
  itemUrl?: string
  date: string | number
  title: string
  onDeleteHandler: (e?: React.MouseEvent<HTMLElement>) => void
}

const Attachment = ({ itemUrl, date, title, onDeleteHandler }: AttachmentProps) => {
  const { classes } = useStyles()
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
          placeholder={<Text align="center">{title[0] + (title[1] ? title[1] : '')}</Text>}
        />
      </div>
      <div className={classes.divInfo}>
        <Text className={classes.date}>{`Added ${date}`}</Text>
        <Text className={classes.title}>{title}</Text>
        <a href={itemUrl} download>
          <GreyButton className={classes.buttonDownload}>Download</GreyButton>
        </a>
        <GreyButton onClick={onDeleteHandler}>Delete</GreyButton>
      </div>
    </div>
  )
}
export default Attachment

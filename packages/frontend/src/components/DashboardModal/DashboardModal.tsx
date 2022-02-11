import { useState } from 'react'
import { Popover, Modal, Input, Tooltip } from '@mantine/core'
import { BsGlobe, IoMdLock, MdImage, AiOutlinePlus } from 'react-icons/all'

// Components
import ImagePicker from '../ImagePicker/ImagePicker'
import BlueBtn from '../BlueBtn/BlueBtn'
import GrayButton from '../GrayButton/GrayButton'
import GrayButtonFilled from '../GrayButtonFilled/GrayButtonFilled'

// Logic
import GenerateId from '../../logic/generateId'
import GenerateImage from '../../logic/generateImage'

import useStyles from './style'

type DashboardModalProps = {
  isOpen: boolean
  setIsOpen: () => void
  onCloseHandler: (dashboard: {
    id: string
    imageCoverUrl: string
    title: string
    status: boolean
  }) => void
}

const DashboardModal = ({ isOpen, setIsOpen, onCloseHandler }: DashboardModalProps) => {
  const { classes } = useStyles()
  const boardId = new GenerateId().getId
  const generatedImage = new GenerateImage(boardId).getImage
  const [currentCoverImageUrl, setCurrentCoverImageUrl] = useState(generatedImage)
  const [currentTitle, setCurrentTitle] = useState('')
  const [visibleImagePicker, setVisibleImagePicker] = useState(false)
  const [isPrivate, setIsPrivate] = useState(false)
  const [tooltipOpened, setTooltipOpened] = useState(false)

  const onCreateBoardHandler = () => {
    if (currentTitle) {
      onCloseHandler({
        id: boardId,
        imageCoverUrl: currentCoverImageUrl,
        title: currentTitle,
        status: isPrivate
      })
      setIsOpen()
    } else {
      setTooltipOpened(true)
    }
  }

  const onImagePickerHandler = (val: string) => {
    setCurrentCoverImageUrl(val)
  }

  return (
    <Modal
      classNames={{ root: classes.modal, close: classes.closeButton, header: classes.modalTitle }}
      opened={isOpen}
      onClose={setIsOpen}
      centered
      overflow="inside"
      size="340px"
    >
      {currentCoverImageUrl ? (
        <img src={currentCoverImageUrl} className={classes.coverImage} alt="Cover" />
      ) : null}
      <section className={classes.column}>
        <Tooltip
          classNames={{ body: classes.tooltip, arrow: classes.tooltip }}
          label="This field must not be empty"
          withArrow
          opened={tooltipOpened}
        >
          <Input
            className={classes.titleInput}
            radius="md"
            placeholder="Add board title"
            invalid={tooltipOpened}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setCurrentTitle(event.target.value)
              setTooltipOpened(false)
            }}
          />
        </Tooltip>
        <section className={classes.row}>
          <Popover
            opened={visibleImagePicker}
            onClose={() => setVisibleImagePicker(false)}
            target={
              <GrayButtonFilled
                onClick={() => setVisibleImagePicker((prevState: boolean) => !prevState)}
                leftIcon={<MdImage />}
              >
                Cover
              </GrayButtonFilled>
            }
            position="left"
            placement="start"
            width={260}
            spacing={0}
            radius="md"
            className={classes.popTarget}
          >
            <ImagePicker imageSize="small" onImageSelectedHandler={onImagePickerHandler} />
          </Popover>
          <GrayButtonFilled
            onClick={() => setIsPrivate((prevState: boolean) => !prevState)}
            leftIcon={isPrivate ? <IoMdLock /> : <BsGlobe />}
          >
            {isPrivate ? 'Private' : 'Public'}
          </GrayButtonFilled>
        </section>
        <section className={classes.footer}>
          <div className={classes.spanner} />
          <GrayButton className={classes.cancelButton} onClick={setIsOpen}>
            Cancel
          </GrayButton>
          <BlueBtn leftIcon={<AiOutlinePlus />} onClick={onCreateBoardHandler}>
            Create
          </BlueBtn>
        </section>
      </section>
    </Modal>
  )
}

export default DashboardModal

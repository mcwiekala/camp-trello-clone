import { Avatar, Input, Text } from '@mantine/core'
import { useState } from 'react'
import PropTypes from 'prop-types'
import useStyles from './style'
import ActionIconSearch from './ActionIconSearch'
import { IMAGE_API_PROVIDER_URL, IMAGE_API_IMAGES_PER_PAGE } from '../../config'
import { debounce } from '../../utils/functions'

const ImagePicker = ({ imageSize, onImageSelectedHandler }) => {
  const { classes } = useStyles()
  const [images, setImages] = useState([])

  const getPhotos = (event) => {
    const { value } = event.target
    fetch(
      `${IMAGE_API_PROVIDER_URL}?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&query=${value}&per_page=${IMAGE_API_IMAGES_PER_PAGE}`
    )
      .then((res) => res.json())
      .then((json) => setImages(json.results))
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err))
  }
  const onKeywordChangeHandler = debounce(getPhotos)

  return (
    <div className={classes.outline}>
      <Text size="sm">Photo Search</Text>
      <Text className={classes.photoUnsplashText} size="sm">
        Search unsplash for photos
      </Text>
      <Input
        className={classes.searchInput}
        radius="md"
        size="xs"
        placeholder="Keywords..."
        rightSection={<ActionIconSearch />}
        onChange={onKeywordChangeHandler}
      />
      <div className={classes.imageResults}>
        {images.map((imageLink) => (
          <Avatar
            key={imageLink.id}
            radius="md"
            size="lg"
            src={imageLink.urls.thumb}
            onClick={() => onImageSelectedHandler(imageLink.urls[imageSize])}
          />
        ))}
      </div>
    </div>
  )
}

ImagePicker.propTypes = {
  imageSize: PropTypes.oneOf(['full', 'raw', 'regular', 'small', 'thumb']),
  onImageSelectedHandler: PropTypes.func
}
export default ImagePicker

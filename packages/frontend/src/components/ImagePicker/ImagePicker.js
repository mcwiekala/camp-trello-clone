import { Avatar, Input, Text } from '@mantine/core'
import { useState } from 'react'
import PropTypes from 'prop-types'
import useStyles from './style'
import { IMAGE_API_PROVIDER_URL, IMAGE_API_IMAGES_PER_PAGE } from '../../config'
import { debounce } from '../../utils/debounce'
import SearchBar from '../SearchBar/SearchBar'

export const pickerImagesSizes = {
  full: 'full',
  raw: 'raw',
  regular: 'regular',
  small: 'small',
  thumb: 'thumb'
}

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
      <SearchBar onKeywordChangeHandler={onKeywordChangeHandler} actionType="button" />
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
  imageSize: PropTypes.oneOf(Object.values(pickerImagesSizes)),
  onImageSelectedHandler: PropTypes.func
}
export default ImagePicker

import { Avatar, Input, Text } from '@mantine/core'
import { useState } from 'react'
import PropTypes from 'prop-types'
import useStyles from './style'
import ActionIconSearch from './ActionIconSearch'

const ImagePicker = ({ imageSize, onImageSelectedHandler }) => {
  const { classes } = useStyles()
  const [images, setImages] = useState([])

  const debounce = (func) => {
    let timer
    return (args) => {
      clearTimeout(timer)
      timer = setTimeout(() => func(args), 300)
    }
  }

  const getPhotos = (event) => {
    const { value } = event.target
    fetch(
      `https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&query=${value}&per_page=12`
    )
      .then((res) => res.json())
      .then((json) => setImages(json.results))
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
  imageSize: PropTypes.oneOf(['full', 'raw', 'regular', 'small', 'thumb'])
}
export default ImagePicker

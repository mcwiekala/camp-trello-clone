import type { ElementType, ChangeEvent } from 'react'
import { Input, InputProps } from '@mantine/core'

import ActionIconSearch from './ActionIconSearch'
import SearchButton from './SearchButton'
import useStyles from './styles'

export type SearchBarProps = InputProps<ElementType> & {
  onKeywordChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
  actionType: 'button' | 'icon'
}

const SearchBar = ({
  radius = 'md',
  size = 'xs',
  placeholder = 'Keywords...',
  onKeywordChangeHandler,
  actionType,
  ...restProps
}: SearchBarProps) => {
  const { classes } = useStyles()

  return (
    <Input
      classNames={{
        input: classes.input,
        wrapper: classes.wrapper,
        rightSection: actionType === 'button' ? classes.buttonRightSection : ''
      }}
      radius={radius}
      size={size}
      placeholder={placeholder}
      rightSection={actionType === 'icon' ? <ActionIconSearch /> : <SearchButton />}
      onChange={onKeywordChangeHandler}
      {...restProps}
    />
  )
}

export default SearchBar

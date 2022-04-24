import { UserDto } from './user/user.dto'

// TODO: create CommentSchema as emmbeded document in Task Model
interface CommentTypeDTO {
  id?: string
  userData?: UserDto
  textContent?: string
  date?: Date
}

export default CommentTypeDTO

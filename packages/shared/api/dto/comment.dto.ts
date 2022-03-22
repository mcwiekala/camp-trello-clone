import UserTypeDTO from './user.dto'

// TODO: create CommentSchema as emmbeded document in Task Model
interface CommentTypeDTO {
  id?: string
  userData?: UserTypeDTO
  textContent?: string
  date?: Date
}

export default CommentTypeDTO

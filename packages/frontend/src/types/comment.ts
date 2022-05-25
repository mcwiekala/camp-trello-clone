import { UserDTO } from 'shared'

// TODO: REMOVE IT USE DTO from: packages/shared/api/dto/*.dto.ts instead
type CommentType = {
  id: string
  userData: UserDTO
  textContent: string
  date: Date
}

export default CommentType

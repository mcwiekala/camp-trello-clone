import UserType from './user'

// TODO: REMOVE IT USE DTO from: packages/shared/api/dto/*.dto.ts instead
type CommentType = {
  id: string
  userData: UserType
  textContent: string
  date: Date
}

export default CommentType

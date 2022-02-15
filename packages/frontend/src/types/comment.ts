import UserType from './user'

type CommentType = {
  id: string
  userData: UserType
  textContent: string
  date: Date
}

export default CommentType

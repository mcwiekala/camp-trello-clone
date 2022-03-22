import AttachmentType from './attachment'
import UserType from './user'

// TODO: REMOVE IT USE DTO from: packages/shared/api/dto/*.dto.ts instead
type TaskType = {
  id: string
  imageCoverURL: string | null
  title: string
  description: string
  attachment: AttachmentType[]
  assigneeList: UserType[]
}
export default TaskType

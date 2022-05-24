import { UserDTO } from 'shared'
import AttachmentType from './attachment'

// TODO: REMOVE IT USE DTO from: packages/shared/api/dto/*.dto.ts instead
type TaskType = {
  id: string
  imageCoverURL: string | null
  title: string
  description: string
  attachment: AttachmentType[]
  assigneeList: UserDTO[]
}
export default TaskType

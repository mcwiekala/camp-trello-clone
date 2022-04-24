import AttachmentDTO from './attachment.dto'
import { UserDto } from './user/user.dto'

interface TaskDTO {
  id: string
  imageCoverId?: string
  title: string
  description?: string
  attachments?: AttachmentDTO[]
  // TODO: add to TaskModel
  assignees?: UserDto[]
}

export default TaskDTO

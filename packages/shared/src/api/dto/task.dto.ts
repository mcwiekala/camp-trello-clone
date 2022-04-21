import AttachmentDTO from './attachment.dto'
import UserDTO from './user.dto'

interface TaskDTO extends Express.Response {
  _id?: string
  imageCoverId?: string
  title: string
  description?: string
  attachments?: AttachmentDTO[]
  // TODO: add to TaskModel
  assignees?: UserDTO[]
}

export default TaskDTO

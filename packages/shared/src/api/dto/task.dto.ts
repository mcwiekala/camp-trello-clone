import TaskBase from '../../models/taskBase'
import { AttachmentDTO, UserDTO } from '../index'

interface TaskDTO extends TaskBase {
  id: string
  attachments: AttachmentDTO[]
  assigneeList: UserDTO[]
}

export default TaskDTO

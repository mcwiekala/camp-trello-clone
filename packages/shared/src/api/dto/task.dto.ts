import TaskBase from '../../models/taskBase'
import { AttachmentDTO } from '../index'

interface TaskDTO extends TaskBase {
  id: string
  attachments: AttachmentDTO[]
}

export default TaskDTO

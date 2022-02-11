import AttachmentType from './attachment'
import UserType from './user'

type TaskType = {
  id: string
  imageCoverURL: string | null
  title: string
  description: string
  attachment: AttachmentType[]
  assigneeList: UserType[]
}
export default TaskType

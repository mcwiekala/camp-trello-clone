import TaskDTO from './task.dto'

interface ColumnDTO {
  title?: string
  order?: number
  tasks?: [TaskDTO]
}

export default ColumnDTO

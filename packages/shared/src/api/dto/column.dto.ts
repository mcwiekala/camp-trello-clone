import TaskDTO from './task.dto'

interface ColumnDTO {
  id?: string
  title?: string
  order?: number
  tasks?: TaskDTO[]
}

export default ColumnDTO

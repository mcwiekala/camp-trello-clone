import TaskDTO from './task.dto'

interface ColumnDTO {
  idCol?: string
  title?: string
  order?: number
  tasks?: TaskDTO[]
}

export default ColumnDTO

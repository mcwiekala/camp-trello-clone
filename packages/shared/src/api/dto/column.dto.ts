import { TaskDTO } from '../index'

interface ColumnDTO {
  id: string
  title: string
  order: number
  tasks: TaskDTO[]
}

export default ColumnDTO

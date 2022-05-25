import ColumnBase from '../../models/columnBase'
import { TaskDTO } from '../index'

export default interface ColumnDTO extends ColumnBase {
  id: string
  title: string
  order: number
  tasks: TaskDTO[]
}

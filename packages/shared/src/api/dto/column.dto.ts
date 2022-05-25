import ColumnBase from '../../models/columnBase'
import { TaskDTO } from '../index'

export default interface ColumnDTO extends ColumnBase {
  id: string
  tasks: TaskDTO[]
}

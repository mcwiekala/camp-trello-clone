import { ColumnBase } from 'shared'
import Task from '../task/task'

export interface Column extends ColumnBase {
  internalId: string
  tasks: Task[]
}

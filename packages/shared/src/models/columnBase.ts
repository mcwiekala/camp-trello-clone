import TaskBase from './taskBase'

export default interface ColumnBase {
  title: string
  order: number
  tasks: TaskBase[]
}

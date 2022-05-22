import TaskBase from '../task/task'

export class Column {
  private _title: string
  private _order: number
  private _tasks: TaskBase[]

  constructor(title: string, order: number, tasks: TaskBase[]) {
    this._title = title
    this._order = order
    this._tasks = tasks
  }
  public get title() {
    return this._title
  }

  public get order() {
    return this._order
  }

  public get tasks() {
    return this._tasks
  }
}

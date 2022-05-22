import TaskBase from '../task/task'

export class Column {
  private _idCol: string
  private _title: string
  private _order: number
  private _tasks: TaskBase[]

  constructor(idCol: string, title: string, order: number, tasks: TaskBase[]) {
    this._idCol = idCol
    this._title = title
    this._order = order
    this._tasks = tasks
  }
  public get idCol() {
    return this._idCol
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

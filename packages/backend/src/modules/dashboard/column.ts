import TaskDTO from 'shared/lib/api/dto/task.dto'

export class Column {
  private _id: string
  private _title: string
  private _order: number
  private _tasks: TaskDTO[]

  constructor(idCol: string, title: string, order: number, tasks: TaskDTO[]) {
    this._id = idCol
    this._title = title
    this._order = order
    this._tasks = tasks
  }
  public get id() {
    return this._id
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

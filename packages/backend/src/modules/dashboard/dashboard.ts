import { DashboardVisibility } from 'shared'
import UserDto from 'shared/lib/api/dto/user.dto'
import ColumnDTO from 'shared/lib/api/dto/column.dto'

export class Dashboard {
  private _id: string
  private _title: string
  private _description: string
  private _imageCoverUrl: string
  private _users: UserDto[]
  private _status: DashboardVisibility
  private _columns: ColumnDTO[]

  constructor(
    id: string,
    title: string,
    description: string,
    imageCoverUrl: string,
    status: DashboardVisibility,
    _users: UserDto[],
    columns: ColumnDTO[]
  ) {
    this._id = id
    this._title = title
    this._description = description
    this._imageCoverUrl = imageCoverUrl
    this._status = status
    this._users = _users
    this._columns = columns
  }

  public get id() {
    return this._id
  }

  public get title() {
    return this._title
  }

  public get description() {
    return this._description
  }

  public get imageCoverUrl() {
    return this._imageCoverUrl
  }

  public get status() {
    return this._status
  }

  public get users() {
    return this._users
  }

  public get column() {
    return this._columns
  }
}

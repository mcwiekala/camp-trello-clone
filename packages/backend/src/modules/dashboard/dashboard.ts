import { DashboardVisibility } from 'shared'

export class Dashboard {
  private _id: string
  private _title: string
  private _description: string
  private _imageCoverUrl: string
  private _status: DashboardVisibility

  constructor(
    id: string,
    title: string,
    description: string,
    imageCoverUrl: string,
    status: DashboardVisibility
  ) {
    this._id = id
    this._title = title
    this._description = description
    this._imageCoverUrl = imageCoverUrl
    this._status = status
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
}

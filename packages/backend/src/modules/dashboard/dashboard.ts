import { DashboardBase } from 'shared'
import User from '../user/user'
import { Column } from './column'

export interface Dashboard extends DashboardBase {
  id: string
  users?: User[]
  columns: Column[]
}

import { DashboardVisibility } from '../api'

export default interface DashboardBase {
  title: string
  description: string
  imageCoverUrl: string
  createdAt: Date
  status: DashboardVisibility
  users: unknown
  columns: unknown
}

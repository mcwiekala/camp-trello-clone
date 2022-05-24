import { DashboardVisibility } from '../api'

// Nie da sie w tą stronę
import Column from '../../../backend/src/modules/dashboard/column'

export default interface DashboardBase {
  title: string
  description: string
  imageCoverUrl: string
  createdAt: Date
  status: {
    enum: DashboardVisibility
  }
  users?: unknown
  columns: Column[]
}

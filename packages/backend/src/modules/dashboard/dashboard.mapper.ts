import DashboardDTO from 'packages/shared/src/api/dto/dashboard.dto'
import { Dashboard } from './dashboard'
import { Mapper } from '../../application/Mapper'

export class DashboardMapper {
  public mapToDomain(raw: any): Dashboard {
    return new Dashboard(raw._id, raw.title, raw.description, raw.imageCoverUrl, raw.status)
  }

  public mapToPersistence(dashboard: Dashboard): any {
    return { _id: dashboard.id, title: dashboard.title }
  }

  public mapToDto(dashboard: Dashboard): DashboardDTO {
    return {
      id: dashboard.id,
      title: dashboard.title,
      description: dashboard.description,
      imageCoverUrl: dashboard.imageCoverUrl,
      status: dashboard.status
    }
  }
}

const dashboardMapper = new DashboardMapper()
export { dashboardMapper }

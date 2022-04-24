import DashboardDTO from 'packages/shared/src/api/dto/dashboard.dto'
import { Dashboard } from './Dashboard'
import { Mapper } from '../../application/Mapper'

export class DashboardMapper implements Mapper<Dashboard, DashboardDTO> {
  public mapToDomain(raw: any): Dashboard {
    return new Dashboard(raw._id, raw.title)
  }

  public mapToPersistance(dashboard: Dashboard): any {
    return { _id: dashboard.id, title: dashboard.title }
  }

  public mapToDto(dashboard: Dashboard): DashboardDTO {
    return { _id: dashboard.id, title: dashboard.title }
  }
}

const dashboardMapper = new DashboardMapper()
export { dashboardMapper }

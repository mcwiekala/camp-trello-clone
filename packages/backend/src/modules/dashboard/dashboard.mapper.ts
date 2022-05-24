/* eslint-disable @typescript-eslint/no-explicit-any */
import DashboardDTO from 'packages/shared/src/api/dto/dashboard.dto'
import { Dashboard } from './dashboard'
import { Mapper } from '../../application/Mapper'
import { DashboardDocument } from './dashboard.model'

export class DashboardMapper implements Mapper<Dashboard, DashboardDocument, DashboardDTO> {
  public mapToDomain(dashboardDocument: DashboardDocument): Dashboard {
    return {
      id: dashboardDocument.id,
      title: dashboardDocument.title,
      description: dashboardDocument.description,
      imageCoverUrl: dashboardDocument.imageCoverUrl,
      status: dashboardDocument.status,
      createdAt: dashboardDocument.createdAt
    }
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
      status: dashboard.status,
      createdAt: dashboard.createdAt,
      users: []
    }
  }
}

const dashboardMapper = new DashboardMapper()
export { dashboardMapper }

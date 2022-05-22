import DashboardDTO from 'packages/shared/src/api/dto/dashboard.dto'
import ColumnDTO from 'packages/shared/lib/api/dto/column.dto'
import { Dashboard } from './dashboard'
import { Mapper } from '../../application/Mapper'
import { Column } from './column'

export class DashboardMapper implements Mapper<Dashboard, DashboardDTO> {
  public mapToDomain(raw: any): Dashboard {
    return new Dashboard(
      raw._id,
      raw.title,
      raw.description,
      raw.imageCoverUrl,
      raw.createdAt,
      raw.status,
      raw.column
    )
  }

  public mapToPersistance(dashboard: Dashboard): any {
    return { _id: dashboard.id, title: dashboard.title }
  }

  // public mapColumnToDto(column: Column): ColumnDTO {
  //   return {
  //     title: column.title,
  //     order: column.order,
  //     tasks: column.tasks
  //   }
  // }

  public mapToDto(dashboard: Dashboard): DashboardDTO {
    return {
      id: dashboard.id,
      title: dashboard.title,
      description: dashboard.description,
      imageCoverUrl: dashboard.imageCoverUrl,
      createdAt: dashboard.createdAt,
      status: dashboard.status,
      columns: dashboard.columns
      // column: dashboard.column.map((column: ColumnDTO) => ({
      //   title: column.title,
      //   order: column.order,
      //   tasks: column.tasks
      // }))
    }
  }
}

const dashboardMapper = new DashboardMapper()
export { dashboardMapper }

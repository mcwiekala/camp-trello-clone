/* eslint-disable @typescript-eslint/no-explicit-any */
import DashboardDTO from 'packages/shared/src/api/dto/dashboard.dto'
import ColumnDTO from 'shared/lib/api/dto/column.dto'
import { Dashboard } from './dashboard'
import { Mapper } from '../../application/Mapper'
import { columnMapper } from './column.mapper'
import { Column } from './column'

export class DashboardMapper implements Mapper<Dashboard, any, DashboardDTO> {
  public mapToDomain(raw: any): Dashboard {
    return new Dashboard(
      raw._id,
      raw.title,
      raw.description,
      raw.imageCoverUrl,
      raw.users,
      raw.status,
      raw.column
    )
  }

  public mapToPersistence(dashboard: Dashboard): any {
    return { _id: dashboard.id, title: dashboard.title }
  }

  public mapToDto(dashboard: Dashboard): DashboardDTO {
    const columnArray: ColumnDTO[] = []
    dashboard.columns.forEach((dto: Column) => {
      const columnMapped: ColumnDTO = columnMapper.mapToDto(dto)
      columnArray.push(columnMapped)
    })
    return {
      id: dashboard.id,
      title: dashboard.title,
      description: dashboard.description,
      imageCoverUrl: dashboard.imageCoverUrl,
      users: dashboard.users,
      status: dashboard.status,
      columns: columnArray
    }
  }
}

const dashboardMapper = new DashboardMapper()
export { dashboardMapper }

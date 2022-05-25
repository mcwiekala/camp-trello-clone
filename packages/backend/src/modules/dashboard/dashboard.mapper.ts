/* eslint-disable @typescript-eslint/no-explicit-any */
import DashboardDTO from 'packages/shared/src/api/dto/dashboard.dto'
import ColumnDTO from 'shared/lib/api/dto/column.dto'
import { UserDTO } from 'shared'
import { Dashboard } from './dashboard'
import { Mapper } from '../../application/Mapper'
import { DashboardDocument } from './dashboard.model'
import { columnMapper } from './column.mapper'
import { Column } from './column'
import { User } from '../user/user'
import userMapper from '../user/user.mapper'

export class DashboardMapper implements Mapper<Dashboard, DashboardDocument, DashboardDTO> {
  public mapToDomain(dashboardDocument: DashboardDocument): Dashboard {
    return {
      id: dashboardDocument.id,
      title: dashboardDocument.title,
      description: dashboardDocument.description,
      imageCoverUrl: dashboardDocument.imageCoverUrl,
      status: dashboardDocument.status,
      createdAt: dashboardDocument.createdAt,
      columns: dashboardDocument.columns,
      users: dashboardDocument.users
    }
  }

  public mapToPersistence(dashboard: Dashboard): any {
    return { _id: dashboard.id, title: dashboard.title }
  }

  public mapToDto(dashboard: Dashboard): DashboardDTO {
    const userArray: UserDTO[] = []
    console.log(`DashboardMapper.mapToDto user: ${dashboard.users[0]}`)
    dashboard.users.forEach((dto: User) => {
      const userMapped: UserDTO = userMapper.mapToDto(dto)
      userArray.push(userMapped)
    })

    const columnArray: ColumnDTO[] = []
    dashboard.columns.forEach((dto: Column) => {
      const columnMapped: ColumnDTO = columnMapper.mapToDto(dto)
      columnArray.push(columnMapped)
    })
    return {
      _id: dashboard.id,
      title: dashboard.title,
      description: dashboard.description,
      imageCoverUrl: dashboard.imageCoverUrl,
      status: dashboard.status,
      createdAt: dashboard.createdAt,
      users: userArray,
      columns: columnArray
    }
  }
}

const dashboardMapper = new DashboardMapper()
export { dashboardMapper }

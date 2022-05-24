import ColumnDTO from 'packages/shared/lib/api/dto/column.dto'
import { Mapper } from '../../application/Mapper'
import { Column } from './column'

export class ColumnMapper implements Mapper<Column, any, ColumnDTO> {
  public mapToDomain(raw: any): Column {
    return new Column(raw.id, raw.title, raw.order, raw.tasks)
  }
  public mapToPersistance(column: Column): any {
    return { id: column.id, title: column.title }
  }
  public mapToDto(column: Column): ColumnDTO {
    return { id: column.id, title: column.title, order: column.order, tasks: column.tasks }
  }
}

const columnMapper = new ColumnMapper()
export { columnMapper }

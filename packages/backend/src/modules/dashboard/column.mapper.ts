import ColumnDTO from 'packages/shared/lib/api/dto/column.dto'
import { Mapper } from '../../application/Mapper'
import { Column } from './column'
import { taskMapper } from '../task/task.mapper'

export class ColumnMapper implements Mapper<Column, ColumnDTO> {
  public mapToDomain(raw: any): Column {
    return new Column(raw.title, raw.order, raw.tasks)
  }
  public mapToPersistance(column: Column): any {
    return { title: column.title }
  }
  public mapToDto(column: Column): ColumnDTO {
    return { title: column.title, order: column.order, task: column.tasks }
  }
}

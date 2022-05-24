import ColumnDTO from 'packages/shared/lib/api/dto/column.dto'
import TaskDTO from 'packages/shared/lib/api/dto/task.dto'
import { Mapper } from '../../application/Mapper'
import { Column } from './column'
import { taskMapper } from '../task/task.mapper'
import Task from '../task/task'

export class ColumnMapper implements Mapper<Column, any, ColumnDTO> {
  public mapToDomain(raw: any): Column {
    return new Column(raw.id, raw.title, raw.order, raw.tasks)
  }
  public mapToPersistance(column: Column): any {
    return { id: column.id, title: column.title }
  }
  public mapToDto(column: Column): ColumnDTO {
    // TODO: use TaskMapper here
    const taskArray: TaskDTO[] = []
    column.tasks.forEach((dto: Task) => {
      const taskMapped: TaskDTO = taskMapper.mapToDto(dto)
      taskArray.push(taskMapped)
    })
    return { id: column.id, title: column.title, order: column.order, tasks: taskArray }
  }
}

const columnMapper = new ColumnMapper()
export { columnMapper }

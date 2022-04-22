import TaskDTO from 'packages/shared/src/api/dto/task.dto'
import { Task } from './task'
import { Mapper } from '../../application/Mapper'

export class TaskMapper implements Mapper<Task, TaskDTO> {
  public mapToDomain(raw: any): Task {
    return new Task(raw._id, raw.title)
  }

  public mapToPersistance(task: Task): any {
    return { _id: task.id, title: task.title }
  }

  public mapToDto(task: Task): TaskDTO {
    return { id: task.id, title: task.title }
  }
}

const taskMapper = new TaskMapper()
export { taskMapper }

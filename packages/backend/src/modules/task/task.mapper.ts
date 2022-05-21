import { TaskDTO } from 'shared'
import { Mapper } from '../../application/Mapper'
import { TaskDocument } from './task.model'
import Task from './task'

export class TaskMapper implements Mapper<Task, TaskDocument, TaskDTO> {
  public mapToDomain(taskDocument: TaskDocument): Task {
    return { id: taskDocument.id, title: taskDocument.title, description: taskDocument.description }
  }

  public mapToDto(task: Task): TaskDTO {
    return { id: task.id, title: task.title, attachments: [] }
  }
}

const taskMapper = new TaskMapper()
export { taskMapper }

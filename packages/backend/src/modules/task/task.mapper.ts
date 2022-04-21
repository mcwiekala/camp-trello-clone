import { TaskDTO } from 'shared'
import { Task } from './task'
import { Mapper } from '../../application/Mapper'

class TaskMapper implements Mapper<Task, TaskDTO> {

  public mapToDomain(raw: any): Task {
    return {
      title: raw.title,
      id: raw.id
    }
  }

  public mapToPersistance(raw: Task): any {
    return { _id: '', title: '' }
  }

  public mapToDto(raw: Task): TaskDTO {
    return { _id: '', title: '' }
  }
}

export default new TaskMapper()

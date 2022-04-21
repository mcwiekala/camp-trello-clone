import { CreateTaskCommandDTO, TaskDTO } from 'shared'
import _taskRepository from './task.repository'

class TaskService {
  // eslint-disable-next-line class-methods-use-this
  createTask(createTaskCommand: CreateTaskCommandDTO): Promise<TaskDTO> {
    console.log('Handling new task')
    return _taskRepository.createTask(createTaskCommand)
  }
  // eslint-disable-next-line class-methods-use-this
  findAll(): Promise<TaskDTO[]> {
    console.log('tu jestem ser')
    return _taskRepository.findAll()
  }
  // eslint-disable-next-line class-methods-use-this
  findById(_id: string): Promise<TaskDTO> {
    return _taskRepository.findById(_id)
  }
}

export default new TaskService()

import { CreateTaskCommand } from '@shared/api/task/CreateTaskCommand'
import _taskRepository from './task.repository'

class TaskService {
  // eslint-disable-next-line class-methods-use-this
  createTask(createTaskCommand: CreateTaskCommand) {
    console.log('Handling new task')
    return _taskRepository.createTask(createTaskCommand)
  }
}

export default new TaskService()

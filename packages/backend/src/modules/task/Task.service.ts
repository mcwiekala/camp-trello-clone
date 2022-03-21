import { CreateTaskCommand } from '@shared/api/task/CreateTaskCommand'
import _taskRepository from './Task.repository'

class TaskService {
  // eslint-disable-next-line class-methods-use-this
  async createTask(createTaskCommand: CreateTaskCommand) {
    console.log('Handling new task')
    _taskRepository.createTask(createTaskCommand)
  }
}

export default new TaskService()

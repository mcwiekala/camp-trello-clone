import { CreateTaskCommand } from 'shared'
import _taskRepository from './task.repository'

class TaskService {
  // eslint-disable-next-line class-methods-use-this
  createTask(createTaskCommand: CreateTaskCommand) {
    console.log('Handling new task')
    return _taskRepository.createTask(createTaskCommand)
  }
  // eslint-disable-next-line class-methods-use-this
  getTasks() {
    return _taskRepository.getTasks()
  }
  // eslint-disable-next-line class-methods-use-this
  getTask(_id: string) {
    return _taskRepository.getTask(_id)
  }
}

export default new TaskService()

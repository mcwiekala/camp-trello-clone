import { CreateTaskCommand } from '@shared/api/task/CreateTaskCommand'
import TaskModel from './task.model'

class TaskRepository {
  private _taskModel = TaskModel

  async createTask(createTaskCommand: CreateTaskCommand) {
    console.log('Create new task in DB')
    // add new task to task collection
    // TODO: add task to list in daschboard collection
    const savedTask = await this._taskModel.create({ title: createTaskCommand.title })
    console.log(savedTask)
    return savedTask
  }
}

export default new TaskRepository()

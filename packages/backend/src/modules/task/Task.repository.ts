import { CreateTaskCommand } from '@shared/api/task/CreateTaskCommand'
import TaskModel from './Task.model'

class TaskRepository {
  private _model = TaskModel

  async createTask(createTaskCommand: CreateTaskCommand) {
    console.log('Create new task in DB')
    return this._model.create({ title: createTaskCommand.title })
  }
}

export default new TaskRepository()

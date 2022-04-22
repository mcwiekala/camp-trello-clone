import { CreateTaskCommandDTO, TaskDTO } from 'shared'
import TaskModel from './task.model'
import _dashboardRepository from '../dashboard/dashboard.repository'

class TaskRepository {
  private _taskModel = TaskModel

  async createTask(createTaskCommand: CreateTaskCommandDTO): Promise<TaskDTO> {
    console.log('Create new task in DB')
    const savedTask = await this._taskModel.create({ title: createTaskCommand.title })
    _dashboardRepository.createTaskInBoard(createTaskCommand, savedTask)
    return savedTask
  }

  async findAll(): Promise<TaskDTO[]> {
    console.log('tu jestem repo')
    const tasks = await this._taskModel.find()
    console.log(tasks)
    return tasks
  }

  async findById(_id: string): Promise<TaskDTO> {
    const tasks = await this._taskModel.findById(_id)
    console.log(tasks)
    return tasks
  }
}

export default new TaskRepository()

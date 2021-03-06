import { CreateTaskCommandDTO, UpdateTaskCommand } from 'shared'
import Task from './task'
import { taskRepository, TaskRepository } from './task.repository'
import { dashboardRepository, DashboardRepository } from '../dashboard/dashboard.repository'

export class TaskService {
  private readonly _taskRepository: TaskRepository
  private readonly _dashboardRepository: DashboardRepository

  constructor(taskRepository: TaskRepository, boardRepository: DashboardRepository) {
    this._taskRepository = taskRepository
    this._dashboardRepository = boardRepository
  }

  async createTask(createTaskCommand: CreateTaskCommandDTO): Promise<Task> {
    console.log('Handling new task')
    const savedTask: Task = await this._taskRepository.createTask(createTaskCommand)
    console.log(`Service returns: ${savedTask}`)
    await this._dashboardRepository.addNewTaskToDashboard(createTaskCommand, savedTask)
    return savedTask
  }

  findAll(): Promise<Task[]> {
    return this._taskRepository.findAll()
  }

  findById(_id: string): Promise<Task> {
    return this._taskRepository.findById(_id)
  }

  removeById(taskId: string): Promise<Task> {
    return this._taskRepository.removeById(taskId)
  }

  async updateById(updateTaskCommand: UpdateTaskCommand, taskId: string): Promise<Task> {
    const updatedTask: Task = await this._taskRepository.updateById(updateTaskCommand, taskId)
    await this._dashboardRepository.updateTaskOnDashboard(updateTaskCommand, taskId)
    return updatedTask
  }
}

const taskService = new TaskService(taskRepository, dashboardRepository)
export { taskService }

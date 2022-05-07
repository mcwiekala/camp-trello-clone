import { CreateTaskCommandDTO, TaskDTO } from 'shared'
import { Task } from './task'
import { taskRepository, TaskRepository } from './task.repository'
import dashboardRepository, { DashboardRepository } from '../dashboard/dashboard.repository'

export class TaskService {
  private readonly _taskRepository: TaskRepository
  private readonly _boardRepository: DashboardRepository

  constructor(taskRepository: TaskRepository, boardRepository: DashboardRepository) {
    // eslint-disable-next-line no-console
    console.log('TaskService constructor')
    this._taskRepository = taskRepository
    this._boardRepository = boardRepository
  }

  async createTask(createTaskCommand: CreateTaskCommandDTO): Promise<Task> {
    // eslint-disable-next-line no-console
    console.log('Handling new task')
    const savedTask: Task = await this._taskRepository.createTask(createTaskCommand)
    // eslint-disable-next-line no-console
    console.log(`Service returns: ${savedTask}`)
    this._boardRepository.addNewTaskToDashboard(createTaskCommand, savedTask)
    return savedTask
  }

  findAll(): Promise<Task[]> {
    return this._taskRepository.findAll()
  }

  findById(_id: string): Promise<Task> {
    return this._taskRepository.findById(_id)
  }
}

const taskService = new TaskService(taskRepository, dashboardRepository)
export { taskService }

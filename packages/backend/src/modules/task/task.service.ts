import { CreateTaskCommandDTO, TaskDTO } from 'shared'
import { Task } from './task'
import { taskRepository, TaskRepository } from './task.repository'
import { boardRepository, BoardRepository } from '../board/board.repository'

export class TaskService {
  private readonly _taskRepository: TaskRepository
  private readonly _boardRepository: BoardRepository

  constructor(taskRepository: TaskRepository, boardRepository: BoardRepository) {
    console.log('TaskService constructor')
    this._taskRepository = taskRepository
    this._boardRepository = boardRepository
  }

  async createTask(createTaskCommand: CreateTaskCommandDTO): Promise<Task> {
    console.log('Handling new task')
    const savedTask: Task = await this._taskRepository.createTask(createTaskCommand)
    console.log(`Service returns: ${savedTask}`)
    this._boardRepository.createTaskInBoard(createTaskCommand, savedTask)
    return savedTask
  }

  findAll(): Promise<Task[]> {
    console.log('tu jestem ser')
    return this._taskRepository.findAll()
  }

  findById(_id: string): Promise<Task> {
    return this._taskRepository.findById(_id)
  }
}

const taskService = new TaskService(taskRepository, boardRepository)
export { taskService }

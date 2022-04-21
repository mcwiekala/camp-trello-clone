import { CreateTaskCommandDTO, TaskDTO } from 'shared'
import { Task } from './task'
import { taskRepository, TaskRepository } from './task.repository'
import { boardRepository, BoardRepository } from '../board/board.repository'

class TaskService {
  private readonly _taskRepository
  private readonly _boardRepository

  constructor(taskRepository: TaskRepository, boardRepository: BoardRepository) {
    this._taskRepository = taskRepository
    this._boardRepository = boardRepository
  }

  createTask(createTaskCommand: CreateTaskCommandDTO): Promise<Task> {
    console.log('Handling new task')
    const savedTask = this._taskRepository.createTask(createTaskCommand)
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

export default new TaskService(taskRepository, boardRepository)

import { CreateTaskCommandDTO, TaskDTO } from 'shared'
import TaskModel from './task.model'
import { Repository } from '../../application/Repository'
import { Task } from './task'

export class TaskRepository implements Repository<TaskDTO> {
  private readonly _taskModel

  constructor(taskModel: any) {
    this._taskModel = taskModel
  }

  async createTask(createTaskCommand: CreateTaskCommandDTO): Promise<Task> {
    console.log('Create new task in DB')
    const savedTask: Task = await this._taskModel.create({ title: createTaskCommand.title })
    return savedTask
  }

  async findAll(): Promise<Task[]> {
    console.log('Get all tasks from repo')
    const tasks: Task[] = await this._taskModel.find()
    console.log(tasks)
    return tasks
  }

  async findById(id: string): Promise<Task> {
    const task: Task = await this._taskModel.findById(id)
    console.log(task)
    return task
  }
}

const taskRepository = new TaskRepository(TaskModel)
export { taskRepository }

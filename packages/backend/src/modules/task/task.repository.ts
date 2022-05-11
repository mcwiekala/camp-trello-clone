import { CreateTaskCommandDTO, TaskDTO, UpdateTaskCommandDTO } from 'shared'
import TaskModel from './task.model'
// import { Repository } from '../../application/Repository'
import { Task } from './task'

// export class TaskRepository implements Repository<TaskDTO> {
export class TaskRepository {
  private readonly _taskModel

  constructor(taskModel: any) {
    this._taskModel = taskModel
  }

  async createTask(createTaskCommand: CreateTaskCommandDTO): Promise<Task> {
    const savedTask: Task = await this._taskModel.create({ title: createTaskCommand.title })
    // eslint-disable-next-line no-console
    console.log(`Create new task in DB: ${savedTask}`)
    return savedTask
  }

  async findAll(): Promise<Task[]> {
    const tasks: Task[] = await this._taskModel.find()
    return tasks
  }

  async findById(id: string): Promise<Task> {
    const task: Task = this._taskModel.findById(id)
    return task
  }

  async removeById(taskId: string): Promise<Task> {
    const task: Task = await this._taskModel.findByIdAndRemove(taskId)
    return task
  }

  async updateById(updateTaskCommand: UpdateTaskCommandDTO, id: string): Promise<Task> {
    const updatedTask: Task = this._taskModel.updateOne(
      { _id: id },
      {
        $set: {
          title: updateTaskCommand.title,
          description: updateTaskCommand.description,
          imageCoverId: updateTaskCommand.imageCoverId
        }
      }
    )
    console.log(`Updated task in DB: ${updatedTask}`)
    return updatedTask
  }
}

const taskRepository = new TaskRepository(TaskModel)
export { taskRepository }

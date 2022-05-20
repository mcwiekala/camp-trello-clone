import {
  CannotUpdateDocumentError,
  CreateTaskCommandDTO,
  DocumentNotFoundError,
  UpdateTaskCommand
} from 'shared'
import TaskMongooseModel, { TaskModel, TaskDocument } from './task.model'
import Task from './task'
import { taskMapper } from './task.mapper'

export class TaskRepository {
  private readonly _taskModel: TaskModel

  constructor(taskModel: TaskModel) {
    this._taskModel = taskModel
  }

  async createTask(createTaskCommand: CreateTaskCommandDTO): Promise<Task> {
    const savedTaskDocument: TaskDocument = await this._taskModel.create({
      title: createTaskCommand.title
    })
    console.log(`Create new task in DB: [${savedTaskDocument}]`)
    return taskMapper.mapToDomain(savedTaskDocument)
  }

  async findAll(): Promise<Task[]> {
    const tasks: Task[] = await this._taskModel.find()
    return tasks
  }

  async findById(taskId: string): Promise<Task> {
    const taskDocument: TaskDocument | null = await this._taskModel.findById(taskId).exec()
    if (taskDocument === null) {
      throw new DocumentNotFoundError(`Cannot find Task Document with id: [${taskId}]`)
    }
    return taskMapper.mapToDomain(taskDocument)
  }

  async removeById(taskId: string): Promise<Task> {
    const taskDocument: TaskDocument | null = await this._taskModel.findByIdAndRemove(taskId).exec()
    if (taskDocument === null) {
      throw new DocumentNotFoundError(`Task with id: [${taskId}] not exists!`)
    }
    return taskMapper.mapToDomain(taskDocument)
  }

  async updateById(updateTaskCommand: UpdateTaskCommand, taskId: string): Promise<Task> {
    const updatedTask: TaskDocument = await this._taskModel
      .updateOne(
        { _id: taskId },
        {
          $set: {
            title: updateTaskCommand.title,
            description: updateTaskCommand.description,
            imageCoverId: updateTaskCommand.imageCoverId
          }
        }
      )
      .catch(() => {
        throw new CannotUpdateDocumentError(`Unable to update a task with id: [${taskId}]!`)
      })
      .then()
    console.log(`Updated task with id: [${taskId}]`)
    return taskMapper.mapToDomain(updatedTask)
  }
}

const taskRepository = new TaskRepository(TaskMongooseModel)
export { taskRepository }

import { CreateTaskCommandDTO, TaskDTO } from 'shared'
import express from 'express'
import { Task } from './task'
import { taskMapper, TaskMapper } from './task.mapper'
import { taskService, TaskService } from './task.service'

export class TaskController {
  private readonly _taskMapper: TaskMapper
  private readonly _taskService: TaskService

  constructor(taskService: TaskService, taskMapper: TaskMapper) {
    console.log('constr:')
    console.log(taskService)
    this._taskMapper = taskMapper
    this._taskService = taskService
  }

  async createTask(req: express.Request, res: express.Response) {
    console.log('create:')
    console.log(taskService)
    const createTaskCommand: CreateTaskCommandDTO = req.body
    console.log(`Received new task with title: ${createTaskCommand.title}`)
    const savedTask: Task = await this._taskService.createTask(createTaskCommand)
    const savedTaskDto: TaskDTO = this._taskMapper.mapToDto(savedTask)
    console.log(`dto: ${savedTaskDto}`)
    return res.status(201).send(savedTaskDto)
  }

  async findAll(req: express.Request, res: express.Response) {
    console.log('tu jestem contr')
    const tasks: Promise<Task[]> = this._taskService.findAll()
    return res.status(201).send(tasks)
  }

  async findById(req: express.Request, res: express.Response) {
    const task: Promise<Task> = this._taskService.findById(req.params.taskId)
    return res.status(201).send(task)
  }
}

const taskController = new TaskController(taskService, taskMapper)
export { taskController }

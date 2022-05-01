import { CreateTaskCommandDTO, TaskDTO, UpdateTaskCommandDTO } from 'shared'
import express from 'express'
import { Task } from './task'
import { taskMapper, TaskMapper } from './task.mapper'
import { taskService, TaskService } from './task.service'

class TaskController {
  private readonly _taskMapper: TaskMapper
  private readonly _taskService: TaskService

  constructor(taskService: TaskService, taskMapper: TaskMapper) {
    this._taskMapper = taskMapper
    this._taskService = taskService
  }

  async createTask(req: express.Request, res: express.Response) {
    const createTaskCommand: CreateTaskCommandDTO = req.body
    console.log(`Received new task with title: ${createTaskCommand.title}`)
    const savedTask: Task = await this._taskService.createTask(createTaskCommand)
    const savedTaskDto: TaskDTO = this._taskMapper.mapToDto(savedTask)
    return res.status(201).send(savedTaskDto)
  }

  async findAll(req: express.Request, res: express.Response) {
    const tasks: Task[] = await this._taskService.findAll()
    const taskDtos: TaskDTO[] = tasks.map((task: Task) => this._taskMapper.mapToDto(task))
    return res.status(201).send(taskDtos)
  }

  async findById(req: express.Request, res: express.Response) {
    const task: Task = await this._taskService.findById(req.params.taskId)
    const taskDto: TaskDTO = this._taskMapper.mapToDto(task)
    return res.status(201).send(taskDto)
  }

  async updateById(req: express.Request, res: express.Response) {
    const updateTaskCommand: UpdateTaskCommandDTO = req.body
    const updatedTask: Task = await this._taskService.updateById(
      updateTaskCommand,
      req.params.taskId
    )
    const updatedTaskDto: TaskDTO = this._taskMapper.mapToDto(updatedTask)
    return res.status(201).send(updatedTaskDto)
  }
}

export default new TaskController(taskService, taskMapper)

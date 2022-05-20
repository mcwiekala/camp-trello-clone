import { CreateTaskCommandDTO, DocumentNotFoundError, TaskDTO, UpdateTaskCommand } from 'shared'
import express from 'express'
import { taskMapper, TaskMapper } from './task.mapper'
import { taskService, TaskService } from './task.service'
import Task from './task'

class TaskController {
  private readonly _taskMapper: TaskMapper
  private readonly _taskService: TaskService

  constructor(taskService: TaskService, taskMapper: TaskMapper) {
    this._taskMapper = taskMapper
    this._taskService = taskService
  }

  async createTask(req: express.Request, res: express.Response) {
    try {
      const createTaskCommand: CreateTaskCommandDTO = req.body
      console.log(`Received new task with title: ${createTaskCommand.title}`)
      const savedTask: Task = await this._taskService.createTask(createTaskCommand)
      const savedTaskDto: TaskDTO = this._taskMapper.mapToDto(savedTask)
      return res.status(201).send(savedTaskDto)
    } catch (error) {
      return res.status(400).send('Bad Request')
    }
  }

  async findAll(req: express.Request, res: express.Response) {
    const tasks: Task[] = await this._taskService.findAll()
    const taskDtos: TaskDTO[] = tasks.map((task: Task) => this._taskMapper.mapToDto(task))
    return res.status(201).send(taskDtos)
  }

  async findById(req: express.Request, res: express.Response) {
    try {
      const task: Task = await this._taskService.findById(req.params.taskId)
      const taskDto: TaskDTO = this._taskMapper.mapToDto(task)
      return res.status(201).send(taskDto)
    } catch (error) {
      if (error instanceof DocumentNotFoundError) {
        return res.status(404).send('Task not found')
      }
      return res.status(400).send('Bad Request')
    }
  }

  async removeById(req: express.Request, res: express.Response) {
    const task: Task | null = await this._taskService.removeById(req.params.taskId)
    if (!task) {
      return res.status(404).send('Task not found.')
    }
    return res.status(200).send('Task has been successfully removed.')
  }

  async updateById(req: express.Request, res: express.Response) {
    try {
      const updateTaskCommand: UpdateTaskCommand = req.body
      const updatedTask: Task = await this._taskService.updateById(
        updateTaskCommand,
        req.params.taskId
      )
      const updatedTaskDto: TaskDTO = this._taskMapper.mapToDto(updatedTask)
      return res.status(200).send(updatedTaskDto)
    } catch (error) {
      if (error instanceof DocumentNotFoundError) {
        return res.status(404).send('Task not found')
      }
      return res.status(400).send('Bad Request')
    }
  }
}

export default new TaskController(taskService, taskMapper)

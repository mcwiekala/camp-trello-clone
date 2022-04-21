import { CreateTaskCommandDTO, TaskDTO } from 'shared'
import express, { Request } from 'express'
import _taskService from './task.service'

class TaskController {
  // eslint-disable-next-line class-methods-use-this
  async createTask(req: express.Request, res: express.Response) {
    console.log(`Received new task with title: ${req.body.title}`)
    const createTaskCommand: CreateTaskCommandDTO = req.body
    const newTask = await _taskService.createTask(createTaskCommand)
    return res.status(201).send(newTask._id)
  }
  // eslint-disable-next-line class-methods-use-this
  async findAll(req: express.Request, res: express.Response) {
    console.log('tu jestem contr')
    const Tasks = await _taskService.findAll()
    return res.status(201).json(Tasks)
  }
  // eslint-disable-next-line class-methods-use-this
  async findById(req: express.Request, res: express.Response) {
    const Task = await _taskService.findById(req.params.taskId)
    return res.status(201).json(Task)
  }
}

export default new TaskController()

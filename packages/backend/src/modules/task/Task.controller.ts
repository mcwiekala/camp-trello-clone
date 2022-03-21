import { CreateTaskCommand } from '@shared/api/task/CreateTaskCommand'
import express from 'express'
import _taskService from './Task.service'

class TaskController {
  // eslint-disable-next-line class-methods-use-this
  async createTask(req: express.Request, res: express.Response) {
    console.log('Received new task')
    const createTaskCommand: CreateTaskCommand = req.body
    return _taskService.createTask(createTaskCommand)
  }
}

export default new TaskController()

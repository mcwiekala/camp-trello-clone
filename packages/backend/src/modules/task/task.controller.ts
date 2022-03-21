import { CreateTaskCommand } from '@shared/api/task/CreateTaskCommand'
import express from 'express'
import _taskService from './task.service'

class TaskController {
  // eslint-disable-next-line class-methods-use-this
  async createTask(req: express.Request, res: express.Response) {
    console.log(`Received new task with title: ${req.body.title}`)
    const createTaskCommand: CreateTaskCommand = req.body
    const newTask = await _taskService.createTask(createTaskCommand)
    return res.status(200).send(newTask)
  }
}

export default new TaskController()

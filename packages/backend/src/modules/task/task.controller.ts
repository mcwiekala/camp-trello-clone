import { CreateTaskCommand } from '@shared/api/task/CreateTaskCommand'
import express from 'express'
import _taskService from './task.service'

class TaskController {
  // eslint-disable-next-line class-methods-use-this
  async createTask(req: express.Request, res: express.Response) {
    console.log(`Received new task with title: ${req.body.title}`)
    const createTaskCommand: CreateTaskCommand = req.body
    const newTask = await _taskService.createTask(createTaskCommand)
    return res.status(200).send(newTask._id)
  }
  // eslint-disable-next-line class-methods-use-this
  async getTasks(req: express.Request, res: express.Response) {
    const Tasks = await _taskService.getTasks()
    return res.status(200).json(Tasks)
  }
  // eslint-disable-next-line class-methods-use-this
  async getTask(req: express.Request, res: express.Response) {
    const Task = await _taskService.getTask(req.params.taskId)
    return res.status(200).json(Task)
  }
}

export default new TaskController()

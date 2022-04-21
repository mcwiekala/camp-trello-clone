import { CreateTaskCommandDTO, TaskDTO } from 'shared'
import express from 'express'
import _taskService from './task.service'
import { Task } from './task'

class TaskController {
  async createTask(req: express.Request, res: express.Response) {
    const createTaskCommand: CreateTaskCommandDTO = req.body
    console.log(`Received new task with title: ${createTaskCommand.title}`)
    const newTask: Task = _taskService.createTask(createTaskCommand)
    return res.status(201).send(newTask)
  }

  async findAll(req: express.Request, res: express.Response) {
    console.log('tu jestem contr')
    const tasks: Promise<Task> = _taskService.findAll()
    return res.status(201).send(tasks)
  }

  async findById(req: express.Request, res: express.Response) {
    const task: Task = _taskService.findById(req.params.taskId)
    return res.status(201).send(task)
  }
}

export default new TaskController()

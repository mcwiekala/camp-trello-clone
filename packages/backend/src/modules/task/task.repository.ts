import { CreateTaskCommand } from 'shared'
import TaskModel from './task.model'
import BoardModel from '../board/Board'

class TaskRepository {
  private _taskModel = TaskModel

  private _boardModel = BoardModel

  async createTask(createTaskCommand: CreateTaskCommand) {
    console.log('Create new task in DB')
    const savedTask = await this._taskModel.create({ title: createTaskCommand.title })
    const board = await this._boardModel.findOne({
      where: {
        _id: { idBoard: createTaskCommand }
      }
    })
    const idCol = { idColumn: createTaskCommand.idColumn }
    const columnIndex = board.columns.findIndex(
      (x: { _id: string }) => String(x._id) === idCol.idColumn
    )

    board.columns[columnIndex].tasks.push(savedTask)
    await board.save()
    return savedTask
  }

  async getTasks() {
    const tasks = await this._taskModel.find()
    console.log(tasks)
    return tasks
  }

  async getTask(_id: string) {
    const tasks = await this._taskModel.findById(_id)
    console.log(tasks)
    return tasks
  }
}

export default new TaskRepository()

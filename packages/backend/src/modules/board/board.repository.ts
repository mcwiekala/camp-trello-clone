import { CreateTaskCommandDTO, TaskDTO } from 'shared'
import BoardModel from './Board'

class BoardRepository {
  private _boardModel = BoardModel

  async createTaskInBoard(createTaskCommand: CreateTaskCommandDTO, savedTask: Promise<TaskDTO>) {
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
  }
}

export default new BoardRepository()

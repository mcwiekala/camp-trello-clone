import { CreateTaskCommandDTO } from 'shared'
import BoardModel from './Board'
import { Task } from '../task/task'

export class BoardRepository {
  private readonly _boardModel = BoardModel

  constructor(boardModel: any) {
    this._boardModel = boardModel
  }

  async addNewTaskToDashboard(createTaskCommand: CreateTaskCommandDTO, savedTask: Task) {
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

const boardRepository = new BoardRepository(BoardModel)
export { boardRepository }

import CreateDashboardCommand from 'packages/shared/api/dto/CreateDashboardCommand'
import mongoose from 'mongoose'
import { Board, BoardColumn } from './board.model'

class TaskRepository {
  private boardModel = Board

  async createDashboard(createDashboardCommand: CreateDashboardCommand) {
    console.log('Creating new dashboard in DB')
    const boardColumn = BoardColumn.create({
      _id: new mongoose.Types.ObjectId(),
      title: 'first column'
    })
    const board = await this.boardModel.create({
      _id: new mongoose.Types.ObjectId(),
      title: createDashboardCommand.title,
      description: createDashboardCommand.description,
      imageCoverUrl: createDashboardCommand.coverImageUrl,
      createdAt: new Date(),
      users: [],
      columns: [boardColumn, boardColumn]
    })

    await board.save()
    return board
  }

  async getDashboards() {
    const boards = await this.boardModel.find()
    console.log(boards)
    return boards
  }

  async getDashboard(_id: string) {
    const board = await this.boardModel.findById(_id)
    console.log(board)
    return board
  }
}

export default new TaskRepository()

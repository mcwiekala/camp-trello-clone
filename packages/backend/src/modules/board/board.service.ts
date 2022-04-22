import CreateDashboardCommand from 'packages/shared/api/dto/CreateDashboardCommand'
import boardRepository from './board.repository'

class BoardService {
  // eslint-disable-next-line class-methods-use-this
  createDashboard(createDashboardCommand: CreateDashboardCommand) {
    console.log('Handling new dashboard')
    return boardRepository.createDashboard(createDashboardCommand)
  }

  // eslint-disable-next-line class-methods-use-this
  getDashboards() {
    return boardRepository.getDashboards()
  }

  // eslint-disable-next-line class-methods-use-this
  getDashboard(_id: string) {
    return boardRepository.getDashboard(_id)
  }
}

export default new BoardService()

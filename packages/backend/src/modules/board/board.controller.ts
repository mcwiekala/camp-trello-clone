import CreateDashboardCommand from 'packages/shared/api/dto/CreateDashboardCommand'
import express from 'express'
import boardService from './board.service'

class BoardController {
  // eslint-disable-next-line class-methods-use-this
  async createDashboard(req: express.Request, res: express.Response) {
    console.log(`Received new dashboard with title: ${req.body.title}`)
    const createDashboardCommand: CreateDashboardCommand = req.body
    const Board = await boardService.createDashboard(createDashboardCommand)
    return res.status(200).send(Board.id)
  }

  // eslint-disable-next-line class-methods-use-this
  async getDashboards(req: express.Request, res: express.Response) {
    const Board = await boardService.getDashboards()
    return res.status(200).json(Board)
  }

  // eslint-disable-next-line class-methods-use-this
  async getDashboard(req: express.Request, res: express.Response) {
    const Board = await boardService.getDashboard(req.params.id)
    return res.status(200).json(Board)
  }
}

export default new BoardController()

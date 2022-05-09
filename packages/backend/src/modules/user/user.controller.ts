/* eslint-disable class-methods-use-this */
import express from 'express'
import userService, { UserService } from './user.service'
import userMapper, { UserMapper } from './user.mapper'

export class UserController {
  private readonly _service
  private readonly _mapper

  constructor(mapper: UserMapper, service: UserService) {
    this._mapper = mapper
    this._service = service
  }

  async create(req: express.Request, res: express.Response) {
    const createdUser = await this._service.create(req.body)
    const dto = this._mapper.mapToDto(createdUser)
    res.status(201).json(dto)
  }

  async updateOneById(req: express.Request, res: express.Response) {
    const updatedUser = await this._service.updateOneById(req.params.userId, req.body)
    const dto = this._mapper.mapToDto(updatedUser)
    res.status(200).json(dto)
  }

  async deleteOneById(req: express.Request, res: express.Response) {
    const deletedUser = await this._service.deleteOneById(req.params.userId)
    const dto = this._mapper.mapToDto(deletedUser)
    res.status(200).json(dto)
  }

  async getOneById(req: express.Request, res: express.Response) {
    const user = await this._service.getOneById(req.params.userId)
    const dto = this._mapper.mapToDto(user)
    res.status(200).json(dto)
  }

  async getAll(req: express.Request, res: express.Response) {
    const users = await this._service.getAll()
    const dtos = users.map((user) => this._mapper.mapToDto(user))
    res.status(200).json(dtos)
  }
}

export default new UserController(userMapper, userService)

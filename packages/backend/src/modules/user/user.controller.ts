/* eslint-disable class-methods-use-this */
import express from 'express'
import userService from './user.service'
import userMapper from './user.mapper'

class UserController {
  async create(req: express.Request, res: express.Response): Promise<void> {
    const createdUser = await userService.create(req.body)
    const dto = userMapper.mapToDto(createdUser)
    res.status(201).json(dto)
  }

  async patch(req: express.Request, res: express.Response): Promise<void> {
    const patchedUser = await userService.patch(req.body)
    const dto = userMapper.mapToDto(patchedUser)
    res.status(200).json(dto)
  }

  async delete(req: express.Request, res: express.Response): Promise<void> {
    const deletedUser = await userService.delete(req.body.id)
    const dto = userMapper.mapToDto(deletedUser)
    res.status(200).json(dto)
  }

  async getOne(req: express.Request, res: express.Response): Promise<void> {
    const user = await userService.getOne(req.body.id)
    const dto = userMapper.mapToDto(user)
    res.status(200).json(dto)
  }

  async getMany(req: express.Request, res: express.Response): Promise<void> {
    const users = await userService.getMany()
    const dtos = users.map((user) => userMapper.mapToDto(user))
    res.status(200).json(dtos)
  }
}

export default new UserController()

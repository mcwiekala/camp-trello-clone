/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
import express from 'express'
import { UserDto, CreateUserCommand, UpdateUserCommand } from 'shared'
import userService, { UserService } from './user.service'
import userMapper, { UserMapper } from './user.mapper'
import { User } from './user'

export class UserController {
  private readonly _service: UserService
  private readonly _mapper: UserMapper

  constructor(mapper: UserMapper, service: UserService) {
    this._mapper = mapper
    this._service = service
  }

  async create(req: express.Request, res: express.Response) {
    try {
      const createUserCommand: CreateUserCommand = req.body
      const createdUser: User = await this._service.create(createUserCommand)
      const dto: UserDto = this._mapper.mapToDto(createdUser)
      res.status(201).json(dto)
    } catch (e) {
      if (e instanceof Error) console.log(`UserController: error creating user: ${e.message}`)
      res.status(400).send('Error creating user')
    }
  }

  async updateOneById(req: express.Request, res: express.Response) {
    try {
      const updateUserCommand: UpdateUserCommand = req.body
      const updatedUser: User = await this._service.updateOneById(
        req.params.userId,
        updateUserCommand
      )
      const dto: UserDto = this._mapper.mapToDto(updatedUser)
      res.status(200).json(dto)
    } catch (e) {
      if (e instanceof Error) {
        console.log(
          `UserController: error updating user with id ${req.params.userId}: ${e.message}`
        )
      }
      res.status(400).send('Error updating user')
    }
  }

  async deleteOneById(req: express.Request, res: express.Response) {
    try {
      const deletedUser: User = await this._service.deleteOneById(req.params.userId)
      const dto: UserDto = this._mapper.mapToDto(deletedUser)
      res.status(200).json(dto)
    } catch (e) {
      if (e instanceof Error) {
        console.log(
          `UserController: error deleting user with id ${req.params.userId}: ${e.message}`
        )
      }
      res.status(400).send('Error deleting user')
    }
  }

  async getOneById(req: express.Request, res: express.Response) {
    try {
      const user: User = await this._service.getOneById(req.params.userId)
      const dto: UserDto = this._mapper.mapToDto(user)
      res.status(200).json(dto)
    } catch (e) {
      if (e instanceof Error) {
        console.log(`UserController: error getting user with id ${req.params.userId}: ${e.message}`)
      }
      res.status(404).send('Error getting user')
    }
  }

  async getAll(req: express.Request, res: express.Response) {
    const users: User[] = await this._service.getAll()
    const dtos: UserDto[] = users.map((user) => this._mapper.mapToDto(user))
    res.status(200).json(dtos)
  }
}

export default new UserController(userMapper, userService)

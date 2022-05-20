/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
import express from 'express'
import {
  UserDTO,
  CreateUserCommand,
  UpdateUserCommand,
  CannotCreateDocumentError,
  CannotFindDocumentError,
  CannotDeleteDocumentError
} from 'shared'
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
      const dto: UserDTO = this._mapper.mapToDto(createdUser)
      res.status(201).json(dto)
    } catch (e) {
      if (e instanceof CannotCreateDocumentError) {
        console.error(`UserController.create: ${e.message}`)
        console.error(e)
        res.status(400).send('Bad request')
        return
      }
      console.error('UserController.create: Unknown error occurred')
      res.status(500).send('Internal Server error')
    }
  }

  async updateOneById(req: express.Request, res: express.Response) {
    try {
      const updateUserCommand: UpdateUserCommand = req.body
      const updatedUser: User = await this._service.updateOneById(
        req.params.userId,
        updateUserCommand
      )
      const dto: UserDTO = this._mapper.mapToDto(updatedUser)
      res.status(200).json(dto)
    } catch (e) {
      if (e instanceof CannotFindDocumentError) {
        console.error(`UserController.updateOneById: ${e.message}`)
        console.error(e)
        res.status(404).send('User not found')
        return
      }
      if (e instanceof CannotCreateDocumentError) {
        console.error(`UserController.updateOneById: ${e.message}`)
        console.error(e)
        res.status(400).send('Bad request')
        return
      }
      console.error('UserController.updateOneById: Unknown error occurred')
      res.status(500).send('Internal Server error')
    }
  }

  async deleteOneById(req: express.Request, res: express.Response) {
    try {
      const deletedUser: User = await this._service.deleteOneById(req.params.userId)
      const dto: UserDTO = this._mapper.mapToDto(deletedUser)
      res.status(200).json(dto)
    } catch (e) {
      if (e instanceof CannotFindDocumentError) {
        console.error(`UserController.deleteOneById: ${e.message}`)
        console.error(e)
        res.status(404).send('User not found')
        return
      }
      if (e instanceof CannotDeleteDocumentError) {
        console.error(`UserController.deleteOneById: ${e.message}`)
        console.error(e)
        res.status(400).send('Bad request')
        return
      }
      console.error('UserController.deleteOneById: Unknown error occurred')
      res.status(500).send('Internal Server error')
    }
  }

  async getOneById(req: express.Request, res: express.Response) {
    try {
      const user: User = await this._service.getOneById(req.params.userId)
      const dto: UserDTO = this._mapper.mapToDto(user)
      res.status(200).json(dto)
    } catch (e) {
      if (e instanceof CannotFindDocumentError) {
        console.error(`UserController.getOneById: ${e.message}`)
        console.error(e)
        res.status(404).send('User not found')
        return
      }
      console.error('UserController.getOneById: Unknown error occurred')
      res.status(500).send('Internal Server error')
    }
  }

  async getAll(req: express.Request, res: express.Response) {
    try {
      const users: User[] = await this._service.getAll()
      const dtos: UserDTO[] = users.map((user) => this._mapper.mapToDto(user))
      res.status(200).json(dtos)
    } catch (e) {
      console.error('UserController.getAll: Unknown error occurred')
      res.status(500).send('Internal Server error')
    }
  }
}

export default new UserController(userMapper, userService)

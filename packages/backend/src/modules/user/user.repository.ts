/* eslint-disable no-underscore-dangle */
import {
  CannotCreateDocumentError,
  CannotDeleteDocumentError,
  CannotFindDocumentError,
  CannotUpdateDocumentError,
  CreateUserCommand,
  UpdateUserCommand
} from 'shared'
import mongoose from 'mongoose'
import { User } from './user'
import userModel, { UserDocument, UserModel } from './user.model'
import userMapper, { UserMapper } from './user.mapper'

export class UserRepository {
  private readonly _model: UserModel
  private readonly _mapper: UserMapper

  constructor(model: UserModel, mapper: UserMapper) {
    this._model = model
    this._mapper = mapper
  }

  async create(command: CreateUserCommand): Promise<User> {
    try {
      const newUser: UserDocument = await this._model.create(command)
      return this._mapper.mapToDomain(newUser)
    } catch (e) {
      throw new CannotCreateDocumentError('User', command)
    }
  }

  async updateOneById(id: string, command: UpdateUserCommand): Promise<User> {
    try {
      const patchedUser: UserDocument = await this._model
        .findByIdAndUpdate(id, command, { new: true })
        .orFail()
      return this._mapper.mapToDomain(patchedUser)
    } catch (e) {
      if (e instanceof mongoose.Error.DocumentNotFoundError) {
        throw new CannotFindDocumentError('User', id)
      }
      throw new CannotUpdateDocumentError('User', id, command)
    }
  }

  async getOneById(id: string): Promise<User> {
    try {
      const user: UserDocument = await this._model.findById(id).orFail()
      return this._mapper.mapToDomain(user)
    } catch (e) {
      throw new CannotFindDocumentError('User', id)
    }
  }

  async getAll(): Promise<User[]> {
    const users: UserDocument[] = await this._model.find({})
    return users.map((user) => this._mapper.mapToDomain(user))
  }

  async deleteOneById(id: string): Promise<User> {
    try {
      const deletedUser: UserDocument = await this._model.findByIdAndDelete(id).orFail()
      return this._mapper.mapToDomain(deletedUser)
    } catch (e) {
      if (e instanceof mongoose.Error.DocumentNotFoundError) {
        throw new CannotFindDocumentError('User', id)
      }
      throw new CannotDeleteDocumentError('User', id)
    }
  }
}

export default new UserRepository(userModel, userMapper)

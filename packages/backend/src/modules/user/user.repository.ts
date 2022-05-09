/* eslint-disable no-underscore-dangle */
import { CreateUserDto, UpdateUserDto } from 'shared'
import mongoose from 'mongoose'
import { User } from './user'
import userModel from './user.model'

export class UserRepository {
  private readonly _model

  constructor(model: mongoose.Model<User>) {
    this._model = model
  }

  async create(dto: CreateUserDto): Promise<User> {
    const newUser = await this._model.create(dto)
    return newUser
  }

  async updateOneById(id: string, dto: UpdateUserDto): Promise<User> {
    const patchedUser = await this._model.findByIdAndUpdate(id, dto, { new: true })
    if (patchedUser === null) {
      throw new Error()
    }
    return patchedUser
  }

  async getOneById(id: string): Promise<User> {
    const user = await this._model.findById(id)
    if (user === null) {
      throw new Error()
    }
    return user
  }

  async getAll(): Promise<User[]> {
    const users = await this._model.find({})
    return users
  }

  async deleteOneById(id: string): Promise<User> {
    const deletedUser = await this._model.findByIdAndDelete(id)
    if (deletedUser === null) {
      throw new Error()
    }
    return deletedUser
  }
}

export default new UserRepository(userModel)

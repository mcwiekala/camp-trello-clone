/* eslint-disable no-underscore-dangle */
import { CreateUserCommand, UpdateUserCommand } from 'shared'
import mongoose from 'mongoose'
import { User } from './user'
import userModel from './user.model'

export class UserRepository {
  private readonly _model: mongoose.Model<User>

  constructor(model: mongoose.Model<User>) {
    this._model = model
  }

  async create(dto: CreateUserCommand): Promise<User> {
    const newUser: User = await this._model.create(dto)
    return newUser
  }

  async updateOneById(id: string, dto: UpdateUserCommand): Promise<User> {
    const patchedUser: User | null = await this._model.findByIdAndUpdate(id, dto, { new: true })
    if (patchedUser === null) {
      throw new Error()
    }
    return patchedUser
  }

  async getOneById(id: string): Promise<User> {
    const user: User | null = await this._model.findById(id)
    if (user === null) {
      throw new Error()
    }
    return user
  }

  async getAll(): Promise<User[]> {
    const users: User[] = await this._model.find({})
    return users
  }

  async deleteOneById(id: string): Promise<User> {
    const deletedUser: User | null = await this._model.findByIdAndDelete(id)
    if (deletedUser === null) {
      throw new Error()
    }
    return deletedUser
  }
}

export default new UserRepository(userModel)

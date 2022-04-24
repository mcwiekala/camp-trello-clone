/* eslint-disable no-underscore-dangle */
import { CreateUserDto, PatchUserDto } from 'shared'
import { User } from './user'
import UserModel from './user.model'
import UserMapper from './user.mapper'

class UserRepository {
  private readonly _model

  constructor() {
    this._model = UserModel
  }

  async create(dto: CreateUserDto): Promise<User> {
    const newUser = await this._model.create(dto)
    return UserMapper.mapToDomain(newUser)
  }

  async patch(id: string, dto: PatchUserDto): Promise<User> {
    const patchedUser = await this._model.findByIdAndUpdate(id, dto, { new: true })
    return UserMapper.mapToDomain(patchedUser)
  }

  async getOne(id: string): Promise<User> {
    const user = await this._model.findById(id)
    return UserMapper.mapToDomain(user)
  }

  async getMany(): Promise<User[]> {
    const users = await this._model.find({})
    return users.map((user) => UserMapper.mapToDomain(user))
  }

  async delete(id: string): Promise<User> {
    const deletedUser = await this._model.findByIdAndDelete(id)
    return UserMapper.mapToDomain(deletedUser)
  }
}

export default new UserRepository()

/* eslint-disable class-methods-use-this */
import { CreateUserCommand, UpdateUserCommand } from 'shared'
import { User } from './user'
import userRepository, { UserRepository } from './user.repository'

export class UserService {
  private readonly _repository

  constructor(repository: UserRepository) {
    this._repository = repository
  }

  async create(dto: CreateUserCommand): Promise<User> {
    return this._repository.createUser(dto)
  }

  async updateOneById(id: string, dto: UpdateUserCommand): Promise<User> {
    return this._repository.updateOneById(id, dto)
  }

  async getOneById(id: string): Promise<User> {
    return this._repository.getOneById(id)
  }

  async getAll(): Promise<User[]> {
    return this._repository.getAll()
  }

  async deleteOneById(id: string): Promise<User> {
    return this._repository.deleteOneById(id)
  }
}

export default new UserService(userRepository)

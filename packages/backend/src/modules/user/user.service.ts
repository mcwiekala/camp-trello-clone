/* eslint-disable class-methods-use-this */
import { CreateUserDto, PatchUserDto } from 'shared'
import { User } from './user'
import userRepository from './user.repository'

class UserService {
  async create(dto: CreateUserDto): Promise<User> {
    return userRepository.create(dto)
  }

  async patch(dto: PatchUserDto): Promise<User> {
    return userRepository.patch(dto)
  }

  async getOne(id: string): Promise<User> {
    return userRepository.getOne(id)
  }

  async getMany(): Promise<User[]> {
    return userRepository.getMany()
  }

  async delete(id: string): Promise<User> {
    return userRepository.delete(id)
  }
}

export default new UserService()

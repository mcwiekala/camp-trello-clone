/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-underscore-dangle, class-methods-use-this */
import { UserDto } from 'shared'
import { Mapper } from '../../application/Mapper'
import { User } from './user'

export class UserMapper implements Mapper<User, UserDto> {
  public mapToDomain(raw: any): User {
    return new User(raw._id, raw.username, raw.googleId, raw.avatarUrl, raw.email)
  }

  public mapToPersistance(user: User): any {
    return {
      _id: user.id,
      username: user.username,
      googleId: user.googleId,
      avatarUrl: user.avatarUrl,
      email: user.email
    }
  }

  public mapToDto(user: User): UserDto {
    return {
      id: user.id,
      username: user.username,
      googleId: user.googleId,
      avatarUrl: user.avatarUrl,
      email: user.email
    }
  }
}

export default new UserMapper()

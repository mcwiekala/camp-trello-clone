/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-underscore-dangle, class-methods-use-this */
import { UserDTO } from 'shared'
import { Mapper } from '../../application/Mapper'
import { User } from './user'
import { UserDocument } from './user.model'

export class UserMapper implements Mapper<User, UserDocument, UserDTO> {
  public mapToDomain(document: UserDocument): User {
    return new User(
      document._id,
      document.username,
      document.googleId,
      document.avatarUrl,
      document.email
    )
  }

  public mapToDto(user: User): UserDTO {
    return {
      _id: user._id,
      username: user.username,
      googleId: user.googleId,
      avatarUrl: user.avatarUrl,
      email: user.email
    }
  }
}

export default new UserMapper()

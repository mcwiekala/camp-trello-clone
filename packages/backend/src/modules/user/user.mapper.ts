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

  // public mapToPersistence(user: User): any {
  //   return {
  //     _id: user.id,
  //     username: user.username,
  //     googleId: user.googleId,
  //     avatarUrl: user.avatarUrl,
  //     email: user.email
  //   }
  // }

  public mapToDto(user: User): UserDTO {
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

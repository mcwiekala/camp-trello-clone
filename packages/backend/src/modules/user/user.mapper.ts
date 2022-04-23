/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-underscore-dangle, class-methods-use-this */
import { UserDto } from 'shared'

import { User } from './user'

class UserMapper {
  public mapToDomain(raw: any): User {
    return new User(raw._id, raw.username, raw.passwordHash, raw.avatarId, raw.dashboards)
  }

  public mapToPersistance(user: User): any {
    return {
      _id: user.id,
      username: user.username,
      passwordHash: user.passwordHash,
      avatarId: user.avatarId,
      dashboards: user.dashboards
    }
  }

  public mapToDto(user: User): UserDto {
    return {
      id: user.id,
      username: user.username,
      passwordHash: user.passwordHash,
      avatarId: user.avatarId,
      dashboards: user.dashboards
    }
  }
}

export default new UserMapper()

export interface UpdateUserDto {
  username?: string
  passwordHash?: string
  avatarId?: number
  memberOfDashboards?: string[]
}

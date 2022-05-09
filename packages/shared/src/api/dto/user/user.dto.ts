export interface UserDto {
  id: string
  username: string
  passwordHash: string
  avatarId: number
  memberOfDashboards: string[]
}

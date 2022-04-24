export interface PatchUserDto {
  username?: string
  passwordHash?: string
  avatarId?: number
  dashboards?: unknown[]
}

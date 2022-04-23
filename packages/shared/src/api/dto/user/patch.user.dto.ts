export interface PatchUserDto {
  id: string
  username?: string
  passwordHash?: string
  avatarId?: number
  dashboards?: unknown[]
}

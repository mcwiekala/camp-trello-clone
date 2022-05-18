export interface Mapper<T, P, D> {
  mapToDomain(persistence: P): T
  mapToDto(type: T): D
}

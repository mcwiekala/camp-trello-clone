export interface Mapper<T, S> {
  mapToDomain(raw: any): T
  mapToPersistance(raw: T): any
  mapToDto(raw: T): S
}

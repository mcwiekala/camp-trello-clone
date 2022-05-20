export interface Mapper<DomainType, PersistenceType, DTOType> {
  mapToPersistence?(domain: DomainType): PersistenceType
  mapToDomain(persistence: PersistenceType): DomainType
  mapToDto(domain: DomainType): DTOType
}

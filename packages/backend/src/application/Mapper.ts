export interface Mapper<Domain, Persistence, DTO> {
  mapToPersistence?(domain: Domain): Persistence
  mapToDomain(persistence: Persistence): Domain
  mapToDto(domain: Domain): DTO
}

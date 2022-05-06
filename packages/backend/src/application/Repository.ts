export interface Repository<T> {
  create(entity: never): Promise<T>
  findById(id: string): Promise<T>
  update(entity: never): Promise<T>
  deleteById(id: string): Promise<T>
}

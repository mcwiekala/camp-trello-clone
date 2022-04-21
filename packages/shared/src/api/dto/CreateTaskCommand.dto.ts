export interface CreateTaskCommandDTO extends Express.Request {
  title: string
  idBoard: string
  idColumn: string
}

export default CreateTaskCommandDTO

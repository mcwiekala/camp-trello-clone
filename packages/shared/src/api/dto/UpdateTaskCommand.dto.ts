export interface UpdateTaskCommandDTO {
  title: string
  description?: string
  imageCoverId?: string
  idDashboard: string
  idColumn: string
}

export default UpdateTaskCommandDTO

export interface UpdateTaskCommand {
  title?: string
  description?: string
  imageCoverId?: string
  idDashboard: string
  idColumn: string
}

export default UpdateTaskCommand

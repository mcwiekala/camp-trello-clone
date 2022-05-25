export class Attachment {
  id: string
  fileName: string
  fileNameHash: string
  addedDate: Date
  taskId: string

  constructor(id: string, fileName: string, fileNameHash: string, addedDate: Date, taskId: string) {
    this.id = id
    this.fileName = fileName
    this.fileNameHash = fileNameHash
    this.addedDate = addedDate
    this.taskId = taskId
  }
}

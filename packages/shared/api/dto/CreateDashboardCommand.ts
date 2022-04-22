import { Status } from 'packages/backend/src/modules/dashboard/Status'

export interface CreateTaskCommand {
  title: string
  description: string
  coverImageUrl: string
  status: {
    type: string
    enum: Status
  }
}

export default CreateTaskCommand

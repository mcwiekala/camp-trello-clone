import mongoose from 'mongoose'

const attachmentsSchema = new mongoose.Schema({
  taskId: String,
  fileName: String,
  addedDate: Date,
  fileNameHash: String
})

const AttachmentModel = mongoose.model('Attachments', attachmentsSchema)
export default AttachmentModel

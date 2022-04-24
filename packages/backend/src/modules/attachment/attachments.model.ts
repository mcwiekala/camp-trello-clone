import mongoose from 'mongoose'

const attachmentsSchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: true
  },
  addedDate: {
    type: Date,
    required: true
  },
  fileNameHash: {
    type: String,
    required: false
  }
})

const AttachmentModel = mongoose.model('Attachments', attachmentsSchema)
export default AttachmentModel

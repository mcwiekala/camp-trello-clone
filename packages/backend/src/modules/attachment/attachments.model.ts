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

export const Attachments = mongoose.model('attachments', attachmentsSchema)

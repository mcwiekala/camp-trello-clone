import mongoose from 'mongoose'

const attachmentSchema = new mongoose.Schema({
  id: String,
  filename: String,
  addedDate: Date,
  content: String
})

const Attachment = mongoose.model('Attachement', attachmentSchema)
export default Attachment

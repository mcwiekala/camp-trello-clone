import mongoose from 'mongoose'

const attachmentSchema = new mongoose.Schema({
  _id: ObjectId,
  fileHash: String,
  addedDate: Date,
  content: String
})

const Attachment = mongoose.model('Attachement', attachmentSchema)
export default Attachment

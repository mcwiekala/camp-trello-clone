import mongoose from 'mongoose'

const { ObjectId } = mongoose.Schema

const attachmentSchema = new mongoose.Schema({
  _id: ObjectId,
  fileName: String,
  addedDate: Date,
  fileNameHash: String
})

const Attachment = mongoose.model('Attachment', attachmentSchema)
export default Attachment

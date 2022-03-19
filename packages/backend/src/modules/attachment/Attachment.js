import mongoose from 'mongoose'

const { ObjectId } = mongoose.Schema

const attachmentSchema = new mongoose.Schema({
  _id: ObjectId,
  filename: String,
  addedDate: Date,
  filenameHash: String
})

const Attachment = mongoose.model('Attachment', attachmentSchema)
export default Attachment

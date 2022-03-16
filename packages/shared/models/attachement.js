import mongoose from 'mongoose'

const attachementSchema = new mongoose.Schema({
  id: String,
  filename: String,
  addedDate: Date,
  content: String
})

const Attachement = mongoose.model('Attachement', attachementSchema)
export default Attachement

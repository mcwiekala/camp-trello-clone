import multer from 'multer'
import { fileNameHash } from './fileNameHash'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, { originalname }, cb) => {
    cb(null, fileNameHash(originalname))
  }
})

export const upload = multer({ storage })

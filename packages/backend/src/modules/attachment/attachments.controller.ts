import { Attachments } from './attachments.model'
import { fileNameHash } from '../../helpers/fileNameHash'

export const attachmentsUpload = async (
  req: { file: { originalname: string } },
  res: any,
  next: any
) => {
  try {
    const file = new Attachments({
      fileName: req.file.originalname,
      addedDate: new Date(),
      fileNameHash: fileNameHash(req.file.originalname)
    })
    await file.save()
    res.status(201).send('File Uploaded Successfully')
  } catch (error) {
    res.status(400).send((error as Error).message)
  }
}

import fsPromises from 'fs/promises'
import express from 'express'
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

export const findByIdAndRemove = async (req: express.Request, res: express.Response) => {
  const { id } = req.params
  const file = await Attachments.findById(id)
  if (!file) {
    return res.status(404).json({ message: 'This Attachment does not exist' })
  }
  try {
    await fsPromises.unlink(`uploads/${file.fileNameHash}`)
    await Attachments.findByIdAndRemove(id)
  } catch (err) {
    console.log(err)
  }
  return res.status(200).json({ message: 'Attachment has been successfully deleted' })
}

export const findById = async (req: express.Request, res: express.Response) => {
  const { id } = req.params
  const file = await Attachments.findById(id)
  const image = `uploads/${file.fileNameHash}`
  if (!file) {
    return res.status(404).json({ message: 'This Attachment does not exist' })
  }
  return res.status(200).download(image)
}

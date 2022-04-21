import crypto from 'crypto'

export function fileNameHash(filename: string) {
  const newName = `${new Date()}${filename}`
  const hash = crypto.createHash('md5').update(newName).digest('hex')
  return hash
}

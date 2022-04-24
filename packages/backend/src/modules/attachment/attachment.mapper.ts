import { AttachmentDTO } from 'shared'
import { Attachment } from './Attachment'
import { Mapper } from '../../application/Mapper'

export class AttachmentMapper implements Mapper<Attachment, AttachmentDTO> {
  public mapToDomain(raw: any): Attachment {
    return new Attachment(raw._id, raw.fileName, raw.fileNameHash, raw.addedDate)
  }

  public mapToPersistance(attachment: Attachment): any {
    return {
      _id: attachment.id,
      fileName: attachment.fileName,
      fileNameHash: attachment.fileNameHash,
      addedDate: attachment.addedDate
    }
  }

  public mapToDto(attachment: Attachment): AttachmentDTO {
    return {
      id: attachment.id,
      fileName: attachment.fileName,
      fileNameHash: attachment.fileNameHash,
      addedDate: attachment.addedDate
    }
  }
}

const attachmentMapper = new AttachmentMapper()
export { attachmentMapper }

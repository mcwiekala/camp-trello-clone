import { AttachmentDTO } from 'shared'
import { Attachment } from './attachment'
import { Mapper } from '../../application/Mapper'

export class AttachmentMapper implements Mapper<Attachment, AttachmentDTO> {
  public mapToDomain(raw: any): Attachment {
    return new Attachment(raw._id, raw.fileName, raw.addedDate, raw.fileNameHash, raw.taskId)
  }

  public mapToPersistance(attachment: Attachment): any {
    return {
      _id: attachment.id,
      fileName: attachment.fileName,
      fileNameHash: attachment.fileNameHash,
      addedDate: attachment.addedDate,
      taskId: attachment.taskId
    }
  }

  public mapToDto(attachment: Attachment): AttachmentDTO {
    return {
      id: attachment.id,
      fileName: attachment.fileName,
      addedDate: attachment.addedDate,
      fileNameHash: attachment.fileNameHash,
      taskId: attachment.taskId
    }
  }
}

const attachmentMapper = new AttachmentMapper()
export { attachmentMapper }

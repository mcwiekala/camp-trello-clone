const attachments = db.getSiblingDB('trello-clone')

const attachment1 = {
  id: '62349be4660dafe985647514',
  filename: 'mysummercar.jpg',
  addedDate: new Date(),
  content: 'content'
}

const attachment2 = {
  id: '62349bd2d83cadc4f01db810',
  filename: 'myprettyphoto.jpg',
  addedDate: new Date(),
  content: 'content'
}

db.attachements.insert(attachment1)
db.attachements.insert(attachment2)

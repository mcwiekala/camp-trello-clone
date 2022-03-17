const attachments = db.getSiblingDB('trello-clone')

const attachment1 = {
  id: 1,
  filename: 'mysummercar.jpg',
  addedDate: new Date(),
  content: 'content'
}

const attachment2 = {
  id: 2,
  filename: 'myprettyphoto.png',
  addedDate: new Date(),
  content: 'content'
}

db.attachements.insert(attachment1)
db.attachements.insert(attachment2)

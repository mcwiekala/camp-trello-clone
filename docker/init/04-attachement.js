const attachements = db.getSiblingDB('trello-clone')

const attachement1 = {
  id: 1,
  filename: 'name',
  addedDate: new Date(),
  content: 'content'
}

const attachement2 = {
  id: 2,
  filename: 'name',
  addedDate: new Date(),
  content: 'content'
}

db.attachements.insert(attachement1)
db.attachements.insert(attachement2)

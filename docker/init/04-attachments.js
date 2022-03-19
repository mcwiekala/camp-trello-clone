const attachment1 = {
  _id: '62349be4660dafe985647514',
  filename: 'mysummercar.jpg',
  addedDate: new Date(),
  filenameHash: '62359dea2985c38ea03a2a2f'
}

const attachment2 = {
  _id: '62349bd2d83cadc4f01db810',
  filename: 'myprettyphoto.jpg',
  addedDate: new Date(),
  filenameHash: '62359dfe02c78d23972f37b3'
}

db.attachments.insert(attachment1)
db.attachments.insert(attachment2)

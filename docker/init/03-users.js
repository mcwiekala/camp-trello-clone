const user1 = {
  _id: ObjectId('6230ef5c91ecd051dc75df37'),
  username: 'Marek Kowalski2137',
  passwordHash: 'pass123hash1',
  avatarId: 23,
  memberOfDashboards: [ObjectId('6230ef67edfb0cbac5e5a246'), ObjectId('6230ef70b0df36f40ca5c7fa')]
}

const user2 = {
  _id: ObjectId('6230ef75c1a96ed7fbb4d3c0'),
  username: 'Jan Przykładowy',
  passwordHash: 'pass123hash',
  avatarId: 2,
  memberOfDashboards: [ObjectId('6230ef7bdcff403b809c17ab')]
}

const user3 = {
  _id: ObjectId('6230ef825b03a415aa9f12db'),
  username: 'Elżbieta Druga',
  passwordHash: 'pass123hash3',
  avatarId: 233,
  memberOfDashboards: [ObjectId('6230ef879fc21ca9b25cccd0')]
}

db.users.insert(user1)
db.users.insert(user2)
db.users.insert(user3)

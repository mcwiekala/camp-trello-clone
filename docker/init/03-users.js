const users = db.getSiblingDB('trello-clone')

const user1 = {
  _id: ObjectId('6230ef5c91ecd051dc75df37'),
  username: 'Marek Kowalski',
  passwordHash: 'pass123hash1',
  avatarId: 23,
  dashboards: [
    {
      _id: ObjectId('6230ef67edfb0cbac5e5a246'),
      imageCoverId: 'photo-1640622842924-fb0017b9d786',
      title: 'New dashboard 1',
      role: 'ADMIN',
      users: [
        {
          _id: ObjectId('6230ef6cd3594bb0cc6ed836'),
          avatarId: 23
        }
      ]
    },
    {
      _id: ObjectId('6230ef70b0df36f40ca5c7fa'),
      imageCoverId: 'photo-1640622842924-fb0017b9d788',
      title: 'New dashboard 2'
    }
  ]
}

const user2 = {
  _id: ObjectId('6230ef75c1a96ed7fbb4d3c0'),
  username: 'Jan Przykładowy',
  passwordHash: 'pass123hash',
  avatarId: 2,
  dashboards: [
    {
      _id: ObjectId('6230ef7bdcff403b809c17ab'),
      imageCoverId: 'photo-1640622842924-fb0017b9d786',
      title: 'New dashboard 1',
      role: 'MEMBER',
      users: [
        {
          _id: ObjectId('6230ef7ed0104aa8563737ff'),
          avatarId: 414
        }
      ]
    }
  ]
}

const user3 = {
  _id: ObjectId('6230ef825b03a415aa9f12db'),
  username: 'Elżbieta Druga',
  passwordHash: 'pass123hash3',
  avatarId: 233,
  dashboards: [
    {
      _id: ObjectId('6230ef879fc21ca9b25cccd0'),
      imageCoverId: 'photo-1640622842924-fb0017b9d723',
      title: 'New dashboard 4',
      role: 'VIEWER',
      users: [
        {
          _id: ObjectId('6230ef8ae96171f1e34549fa'),
          avatarId: 23
        },
        {
          _id: ObjectId('6230ef90b3dbe7b42a53e57c'),
          avatarId: 2
        }
      ]
    }
  ]
}

db.users.insert(user1)
db.users.insert(user2)
db.users.insert(user3)

const rootUser = 'admin'
const rootPassword = 'pass'

const boards = db.getSiblingDB('trello-clone')
boards.auth(rootUser, rootPassword)

const board1 = {
  _id: ObjectId('622e5dd9c3cba876b8800f93'),
  title: 'Tablica 1',
  description: 'Opis tablicy pierwszej',
  createdAt: Date(2020, 11, 17),
  status: 'PUBLIC',
  users: [
    {
      _id: ObjectId('622e5dffa63863cfc5f812f5'),
      username: 'Marek Kowalski',
      avatarId: 345
    }
  ],
  columns: [
    {
      _id: ObjectId('622e5e084eb135ee631dcd8e'),
      title: 'Kolumna Pierwsza',
      tasks: [
        {
          _id: ObjectId('622e5e109a5d1fb63a360fb0'),
          title: 'Tytuł 1',
          imageCoverId: 'photo-1646388023469-18941b7e3b6f',
          comments: [{ _id: ObjectId('622e5e179c945199e651891a') }],
          attachments: [{ _id: ObjectId('622e5e1c15be96a29a180abe') }],
          users: [{ _id: ObjectId('622e5e2094298d670e6129ee') }]
        }
      ]
    }
  ]
}

const board2 = {
  _id: ObjectId('622e5e25f487fec5691b5f93'),
  title: 'Tablica 2',
  description: 'Opis tablicy drugiej',
  createdAt: Date(2021, 5, 3),
  status: 'PRIVATE',
  users: [
    {
      _id: ObjectId('622e5e29374b7eba8ad3e3b1'),
      username: 'Marek Kowalski',
      avatarId: 352
    }
  ],
  columns: [
    {
      _id: ObjectId('622e5e2e33be16d50107c586'),
      title: 'Kolumna Pierwsza',
      tasks: [
        {
          _id: ObjectId('622e5e334c9037251082f475'),
          title: 'Tytuł 2',
          imageCoverId: 'photo-1646388023469-18941b7e3bc5',
          comments: [{ _id: ObjectId('622e5e3b5c6c03a627181d0b') }],
          attachments: [{ _id: ObjectId('622e5e40c510ef7ff2521a30') }],
          users: [{ _id: ObjectId('622e5e464a3da0350eed5e6f') }]
        }
      ]
    }
  ]
}

db.boards.insert(board1)
db.boards.insert(board2)

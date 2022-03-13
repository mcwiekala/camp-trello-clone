import mongoose from 'mongoose'

const { ObjectId } = mongoose.Types

const board1 = {
  _id: new ObjectId('4073f181a2d211ec8131eca1411180c9'),
  title: 'Tablica 1',
  description: 'Opis tablicy pierwszej',
  createdAt: new Date(2020, 11, 17),
  status: 'public',
  users: [
    {
      _id: new ObjectId('622524b42dbfa0665c71fe8c'),
      username: 'Marek Kowalski',
      avatarId: 345
    }
  ],
  columns: [
    {
      _id: new ObjectId('81b21e11a2d211ec915eb6850e481ba6'),
      title: 'Kolumna Pierwsza',
      tasks: [
        {
          _id: new ObjectId('6225239aa76ad13dd37178b6'),
          title: 'Tytuł 1',
          imageCoverId: 'photo-1646388023469-18941b7e3b6f',
          comments: [{ _id: new ObjectId('622524a5e8f9705974dbd0bb') }],
          attachments: [{ _id: new ObjectId('622524c354b1fa45bdf95cd7') }],
          users: [{ _id: new ObjectId('622524b42dbfa0665c71fe8c') }]
        }
      ]
    }
  ]
}

const board2 = {
  _id: new ObjectId('fe255e18a2d211ec989e3a64334d5fe7'),
  title: 'Tablica 2',
  description: 'Opis tablicy drugiej',
  createdAt: new Date(2021, 5, 3),
  status: 'private',
  users: [
    {
      _id: new ObjectId('622524b42dbfa0665c71fe12'),
      username: 'Marek Kowalski',
      avatarId: 352
    }
  ],
  columns: [
    {
      _id: new ObjectId('74f3a6eea2d311ecaee63ffef1563053'),
      title: 'Kolumna Pierwsza',
      tasks: [
        {
          _id: new ObjectId('6225239aa76ad13dd37178c5'),
          title: 'Tytuł 2',
          imageCoverId: 'photo-1646388023469-18941b7e3bc5',
          comments: [{ _id: new ObjectId('622524a5e8f9705974dbd045') }],
          attachments: [{ _id: new ObjectId('491170ada2d211ecadb06e4d0c3fcdd4') }],
          users: [{ _id: new ObjectId('622c727401dc22218e261681') }]
        }
      ]
    }
  ]
}

db.boards.insert(board1)
db.boards.insert(board2)

const tasks = db.getSiblingDB('trello-clone')

const task1 = {
  _id: ObjectId('6225239aa76ad13dd37178b6'),
  title: 'Tytuł 1',
  description: 'Opis ',
  imageCoverId: 'photo-1646388023469-18941b7e3b6f',
  attachments: [
    {
      _id: ObjectId('622524c354b1fa45bdf95cd7')
    }
  ],

  comments: [
    {
      _id: ObjectId('622524a5e8f9705974dbd0bb'),
      content: 'String',
      user: {
        _id: ObjectId('622524b42dbfa0665c71fe8c'),
        avatarId: 345,
        username: 'Marek Kowalski'
      }
    }
  ]
}

const task2 = {
  _id: ObjectId('6225239aa76ad13dd37178c5'),
  title: 'Tytuł 2',
  description: 'Opis 2',
  imageCoverId: 'photo-1646388023469-18941b7e3bc5',
  attachments: [
    {
      _id: ObjectId('622524c354b1fa45bdf95c34')
    }
  ],

  comments: [
    {
      _id: ObjectId('622524a5e8f9705974dbd045'),
      content: 'Komentarz 2',
      user: {
        _id: ObjectId('622524b42dbfa0665c71fe12'),
        avatarId: 352,
        username: 'Marek Kowalski'
      }
    },
    {
      _id: ObjectId('622524a5e8f9705974db3045'),
      content: 'Komentarz 3',
      user: {
        _id: ObjectId('622c727401dc22218e261681'),
        avatarId: 35,
        username: 'Jan Przykładowy'
      }
    }
  ]
}

db.tasks.insert(task1)
db.tasks.insert(task2)

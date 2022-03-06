const rootUser = 'admin'
const rootPassword = 'pass'

const tasks = db.getSiblingDB('trello-clone')
tasks.auth(rootUser, rootPassword)

const task1 = {
  _id: ObjectId('6225239aa76ad13dd37178b6'),
  title: 'Tytuł 1',
  description: 'Opis ',
  imageCoverUrl:
    'https://images.unsplash.com/photo-1646388023469-18941b7e3b6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
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

db.tasks.insert(task1)

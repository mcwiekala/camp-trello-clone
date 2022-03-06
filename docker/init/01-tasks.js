const rootUser = 'admin'
const rootPassword = 'pass'

const tasks = db.getSiblingDB('trello-clone')
tasks.auth(rootUser, rootPassword)

const task1 = {
  id: 123,
  title: 'Tytuł 1',
  description: 'Opis ',
  imageCoverUrl:
    'https://images.unsplash.com/photo-1646388023469-18941b7e3b6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  attachments: [
    {
      id: 'attachment-12'
    }
  ],

  comments: [
    {
      id: 'abc123',
      content: 'String',
      user: {
        id: 'String',
        avatarId: 345,
        username: 'Marek Kowalski'
      }
    }
  ]
}

db.tasks.insert(task1)

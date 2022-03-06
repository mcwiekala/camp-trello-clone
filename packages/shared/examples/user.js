import User from '../models/user'

const user = new User({
  id: '123',
  username: 'Marek Kowalski',
  passwordHash: 'pass123hash',
  avatarId: 23,
  dashboards: [
    {
      id: '1',
      imageCoverUrl:
        'https://images.unsplash.com/photo-1640622842924-fb0017b9d786?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
      title: 'New board 1'
    },
    {
      id: '2',
      imageCoverUrl:
        'https://images.unsplash.com/photo-1640622842924-fb0017b9d786?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
      title: 'New board 2'
    }
  ],
  users: [
    {
      id: '2',
      avatarId: 44
    }
  ]
})
